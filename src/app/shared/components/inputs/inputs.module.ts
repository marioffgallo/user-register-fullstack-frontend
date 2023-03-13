import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/core/constants/Material.module";
import { InputDateComponent } from "./input-date/input-date.component";
import { InputNumberComponent } from "./input-number/input-number.component";
import { InputSelectComponent } from "./input-select/input-select.component";
import { InputTextAreaComponent } from "./input-text-area/input-text-area.component";
import { InputTextComponent } from "./input-text/input-text.component";
import { CheckInputsService } from "./service/check-inputs.service";


@NgModule({
  declarations: [
    InputTextComponent, 
    InputNumberComponent,
    InputDateComponent, 
    InputTextAreaComponent, 
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    InputTextComponent, 
    InputNumberComponent, 
    InputDateComponent, 
    InputTextAreaComponent, 
    InputSelectComponent
  ],
  providers: [
    CheckInputsService
  ]
})
export class InputsModule { }
