import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { convertDateToShow } from 'src/app/core/utils/utils';

@Component({
  selector: 'pop-up-details',
  templateUrl: './pop-up-details.component.html',
  styleUrls: ['./pop-up-details.component.scss'],
})
export class PopUpDetailsComponent {
  public details: User;
  public dateToShow: string;

  constructor(
    public dialogRef: MatDialogRef<PopUpDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.details = data;
    this.dateToShow = convertDateToShow(data.birthDate);
  }
}
