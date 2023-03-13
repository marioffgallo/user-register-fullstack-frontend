import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Log } from 'src/app/core/models/log.model';
import { convertDateHoursToShow } from 'src/app/core/utils/utils';

@Component({
  selector: 'pop-up-log-details',
  templateUrl: './pop-up-log-details.component.html',
  styleUrls: ['./pop-up-log-details.component.scss'],
})
export class PopUpLogDetailsComponent {
  details: Log;
  dateToShow: string;

  constructor(
    public dialogRef: MatDialogRef<PopUpLogDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Log
  ) {
    this.details = data;
    this.dateToShow = convertDateHoursToShow(data.date);
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
