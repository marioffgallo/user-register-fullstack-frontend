import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { AlertComponent } from 'src/app/core/components/alert/alert.component';
import { Alert } from 'src/app/core/models/alert.model';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { compare } from 'src/app/core/utils/sort-tables';
import { PopUpDetailsComponent } from '../pop-up-details/pop-up-details.component';
import { PopUpUserEditComponent } from '../pop-up-user-edit/pop-up-user-edit.component';

@Component({
  selector: 'all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.scss'],
})
export class AllUsersTableComponent implements OnInit, AfterViewInit {
  tooltipPosition: TooltipPosition;
  tooltipDuration: number;

  displayedColumns: string[] = ['id', 'name', 'age', 'acoes'];
  dataSource = new MatTableDataSource<User>([]);

  searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userSvc: UserService, public dialog: MatDialog) {
    this.tooltipDuration = 1;
    this.tooltipPosition = 'right';
  }

  ngOnInit(): void {
    this.buildDatasource();

    this.dataSource.filterPredicate = (data: User, filter: string) => {
      return data.id!.toString().toLowerCase().includes(filter)
        ? data.id!.toString().toLowerCase() === filter
        : data.name!.toString().toLowerCase().includes(filter);
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private buildDatasource() {
    this.userSvc
      .retrieveAllUsers()
      .subscribe((users) => (this.dataSource.data = users));
  }

  public openDetails(user: User) {
    this.dialog.open(PopUpDetailsComponent, {
      data: user,
    });
  }

  public editUser(user: User) {
    this.dialog
      .open(PopUpUserEditComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe((saved) => {
        if (saved) {
          this.buildDatasource();
        }
      });
  }

  public refresh() {
    this.buildDatasource();
  }

  public deleteUser(user: User) {
    const config = {
      data: {
        title: 'Atenção!',
        description: 'Deseja realmente deletar este usuário?',
        btnSuccess: 'Sim',
        corBtnSuccess: 'warn',
        btnCancel: 'Não',
        corBtnCancel: 'primary',
        ownBtnClose: true,
      } as Alert,
    };

    const dialogRef = this.dialog.open(AlertComponent, config);

    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.userSvc.deleteUser(user.id!).subscribe(() => {
          const config = {
            data: {
              title: 'Sucesso!',
              description: 'Usuário foi deletado com sucesso',
              btnSuccess: 'Fechar',
              corBtnSuccess: 'primary',
            } as Alert,
          };

          this.dialog.open(AlertComponent, config);

          this.buildDatasource();
        });
      }
    });
  }

  public sortAllUsers(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'age':
          return compare(a.age, b.age, isAsc);
        default:
          return 0;
      }
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
