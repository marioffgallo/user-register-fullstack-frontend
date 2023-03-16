import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './core/constants/Material.module';
import { CoreComponentsModule } from './core/components/CoreComponents.module';
import { DashboardViewModule } from './features/dashboard/dashboard-view.module';
import { UsersViewModule } from './features/users/users-view.module';
import { InputsModule } from './shared/components/inputs/inputs.module';
import { ServicesModule } from './core/services/services.module';
import { AboutViewModule } from './features/about/about-view.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //General Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Module Core
    CoreComponentsModule,
    MaterialModule,

    //Features Pages
    DashboardViewModule,
    UsersViewModule,
    AboutViewModule,

    //Shared
    InputsModule,
  ],
  providers: [
    CoreComponentsModule,
    ServicesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
