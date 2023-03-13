import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersLogsMock } from 'src/app/core/constants/UsersLogsMock';
import { Log } from 'src/app/core/models/log.model';
import { compare } from 'src/app/core/utils/sort-tables';
import { convertDateToShow } from 'src/app/core/utils/utils';
import { PopUpLogDetailsComponent } from '../pop-up-log-details/pop-up-log-details.component';

@Component({
  selector: 'all-users-logs-table',
  templateUrl: './all-users-logs-table.component.html',
  styleUrls: ['./all-users-logs-table.component.scss'],
})
export class AllUsersLogsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'type', 'date', 'acoes'];
  dataSource = new MatTableDataSource<Log>(UsersLogsMock);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buildDatasource() {}

  openDetails(log: Log) {
    this.dialog.open(PopUpLogDetailsComponent, {
      data: log,
    });
  }

  sortAllLogs(sort: Sort) {
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
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'date':
          return compare(a.date, b.date, isAsc);
        default:
          return 0;
      }
    });
  }

  convertDate(date: Date) {
    return convertDateToShow(date);
  }

  typeToString(value: number) {
    switch(value) {
      case 0:
        return 'GET';
      case 1:
        return 'POST';
      case 2:
        return 'PUT';
      case 3:
        return 'DELETE';
      default:
        return 'ERROR';
    }
  }
}
