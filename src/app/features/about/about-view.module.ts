import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/core/constants/Material.module';
import { AboutPage } from './pages/about.component';

@NgModule({
  declarations: [AboutPage],
  imports: [
    BrowserModule,
    MaterialModule,
    CommonModule,
  ],
  exports: [AboutPage],
  providers: [],
})
export class AboutViewModule {}
