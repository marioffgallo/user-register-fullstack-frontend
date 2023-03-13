import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/constants/Material.module';
import { PopUpLogDetailsComponent } from './pop-up-log-details.component';

@NgModule({
  declarations: [
    PopUpLogDetailsComponent
  ],
  exports: [
    PopUpLogDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PopUpLogDetailsModule { }
