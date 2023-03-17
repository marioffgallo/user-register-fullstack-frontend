import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersTableComponent } from './all-users-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/core/constants/Material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllUsersTableComponent
  ],
  exports: [
    AllUsersTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AllUsersTableModule { }
