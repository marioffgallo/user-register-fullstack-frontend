import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { UsersListMock } from 'src/app/core/constants/UsersListMock';
import { User } from 'src/app/core/models/user.model';
import { compare } from 'src/app/core/utils/sort-tables';
import { PopUpDetailsComponent } from '../pop-up-details/pop-up-details.component';
import { PopUpUserEditComponent } from '../pop-up-user-edit/pop-up-user-edit.component';

@Component({
  selector: 'all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.scss'],
})
export class AllUsersTableComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  tooltipPosition: TooltipPosition;
  tooltipDuration: number;
  displayedColumns: string[] = ['id', 'name', 'age', 'acoes'];
  dataSource = new MatTableDataSource<User>(UsersListMock);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.tooltipDuration = 1;
    this.tooltipPosition = 'right';
  }

  ngOnDestroy() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buildDatasource() {}

  openDetails(user: User) {
    this.dialog.open(PopUpDetailsComponent, {
      data: user,
    });
  }

  editUser(user: User) {
    this.dialog.open(PopUpUserEditComponent, {
      data: user,
    });
  }

  deleteUser(user: User) {
    
  }

  sortAllUsers(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.ID, b.ID, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'age':
          return compare(a.age, b.age, isAsc);
        default:
          return 0;
      }
    });
  }
}
