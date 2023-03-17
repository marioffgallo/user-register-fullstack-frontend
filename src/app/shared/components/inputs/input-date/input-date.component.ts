import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { CheckInputsService } from '../service/check-inputs.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent {
  @Input() title!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;

  public minDate = new Date();

  constructor(public checkInputService: CheckInputsService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
