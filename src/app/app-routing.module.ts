import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './features/about/pages/about.component';
import { DashboardPage } from './features/dashboard/pages/dashboard.component';
import { UserRegisterPage } from './features/users/pages/user-register-page/user-register-page.component';
import { UserLogsPage } from './features/users/pages/users-logs-page/users-logs-page.component';

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
    component: UserRegisterPage
  },
  {
    path:'logs/user',
    component: UserLogsPage
  },
  {
    path:'about',
    component: AboutPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
