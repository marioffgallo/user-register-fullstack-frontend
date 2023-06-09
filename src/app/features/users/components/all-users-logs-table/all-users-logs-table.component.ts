import { AfterViewInit, OnInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Log } from 'src/app/core/models/log.model';
import { LogsService } from 'src/app/core/services/logs.service';
import { compare } from 'src/app/core/utils/sort-tables';
import { convertDateToShow } from 'src/app/core/utils/utils';
import { PopUpLogDetailsComponent } from '../pop-up-log-details/pop-up-log-details.component';

@Component({
  selector: 'all-users-logs-table',
  templateUrl: './all-users-logs-table.component.html',
  styleUrls: ['./all-users-logs-table.component.scss'],
})
export class AllUsersLogsTableComponent implements AfterViewInit, OnInit {
  public displayedColumns: string[] = ['id', 'action', 'date', 'acoes'];
  public dataSource = new MatTableDataSource<Log>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private logSvc: LogsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.buildDatasource();

    this.dataSource.filterPredicate = (data: Log, filter: string) => {
      return data.id!.toString().toLowerCase().includes(filter)
        ? data.id!.toString().toLowerCase() === filter
        : data.action!.toString().toLowerCase().includes(filter);
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private buildDatasource() {
    this.logSvc.retrieveAllLogs().subscribe((logs) => {
      this.dataSource.data = logs;
    });
  }

  public openDetails(log: Log) {
    this.dialog.open(PopUpLogDetailsComponent, {
      data: log,
    });
  }

  public refresh() {
    this.buildDatasource();
  }

  public sortAllLogs(sort: Sort) {
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
        case 'type':
          return compare(a.action, b.action, isAsc);
        case 'date':
          return compare(a.date, b.date, isAsc);
        default:
          return 0;
      }
    });
  }

  public convertDate(date: Date) {
    return convertDateToShow(date);
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
