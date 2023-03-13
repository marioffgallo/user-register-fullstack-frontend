import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard/pages/dashboard.component';
import { UserRegisterComponent } from './features/users/pages/user-register-page/user-register-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
