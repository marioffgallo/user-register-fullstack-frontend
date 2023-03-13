import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/constants/Material.module';
import { PopUpUserEditComponent } from './pop-up-user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreComponentsModule } from 'src/app/core/components/CoreComponents.module';
import { ServicesModule } from 'src/app/core/services/services.module';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';

@NgModule({
  declarations: [
    PopUpUserEditComponent
  ],
  exports: [
    PopUpUserEditComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreComponentsModule,
    InputsModule,
    ServicesModule,
  ]
})
export class PopUpUserEditModule { }
