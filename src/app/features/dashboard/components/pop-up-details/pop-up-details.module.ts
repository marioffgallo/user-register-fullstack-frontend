import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpDetailsComponent } from './pop-up-details.component';
import { MaterialModule } from 'src/app/core/constants/Material.module';

@NgModule({
  declarations: [
    PopUpDetailsComponent
  ],
  exports: [
    PopUpDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PopUpDetailsModule { }
