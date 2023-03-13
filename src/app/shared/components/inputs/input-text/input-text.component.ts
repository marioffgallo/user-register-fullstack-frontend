import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CheckInputsService } from '../service/check-inputs.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

  @Input() title!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;

  constructor(public checkInputService: CheckInputsService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
