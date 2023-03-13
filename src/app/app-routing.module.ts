import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard/pages/dashboard.component';
import { UserRegisterComponent } from './features/users/pages/user-register-page/user-register-page.component';
import { UserLogsComponent } from './features/users/pages/users-logs-page/users-logs-page.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardPage
  },
  {
    path:'dashboard',
    component: DashboardPage
  },
  {
    path:'register/user',
    component: UserRegisterComponent
  },
  {
    path:'logs/user',
    component: UserLogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
