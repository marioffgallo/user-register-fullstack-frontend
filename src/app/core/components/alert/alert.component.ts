import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from '../../models/alert.model';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alert = {
    title: 'Sucesso',
    description: 'Seu registro foi salvo com sucesso.',
    btnSuccess: 'Ok',
    btnCancel: 'Cancelar',
    corBtnSuccess: 'accent',
    corBtnCancel: 'warn',
    ownBtnClose: false,
  } as Alert;

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
  ) {}

  ngOnInit() {
    if (this.data) {
      this.alert.title = this.data.title || this.alert.title;
      this.alert.description = this.data.description || this.alert.description;
      this.alert.btnSuccess = this.data.btnSuccess || this.alert.btnSuccess;
      this.alert.btnCancel =
        this.data.btnCancel || this.alert.btnCancel;
      this.alert.corBtnSuccess =
        this.data.corBtnSuccess || this.alert.corBtnSuccess;
      this.alert.corBtnCancel =
        this.data.corBtnCancel || this.alert.corBtnCancel;
      this.alert.ownBtnClose =
        this.data.ownBtnClose || this.alert.ownBtnClose;
    }
  }
}
