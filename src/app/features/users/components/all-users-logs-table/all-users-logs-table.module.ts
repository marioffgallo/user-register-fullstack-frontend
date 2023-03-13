import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersLogsTableComponent } from './all-users-logs-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/core/constants/Material.module';

@NgModule({
  declarations: [
    AllUsersLogsTableComponent
  ],
  exports: [
    AllUsersLogsTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
})
export class AllUsersLogsTableModule { }
