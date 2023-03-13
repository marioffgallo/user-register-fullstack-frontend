import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreComponentsModule } from 'src/app/core/components/CoreComponents.module';
import { MaterialModule } from 'src/app/core/constants/Material.module';
import { AllUsersTableModule } from './components/all-users-table/all-users-table.module';
import { PopUpDetailsModule } from './components/pop-up-details/pop-up-details.module';
import { PopUpUserEditModule } from './components/pop-up-user-edit/pop-up-user-edit.module';
import { DashboardPage } from './pages/dashboard.component';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    BrowserModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreComponentsModule,
    AllUsersTableModule,
    PopUpDetailsModule,
    PopUpUserEditModule
  ],
  exports: [DashboardPage],
  providers: [],
})
export class DashboardViewModule {}
