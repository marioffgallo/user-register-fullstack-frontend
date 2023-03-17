import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CheckInputsService {
  constructor() {}

  public hasErrorValidar(control: AbstractControl, errorName: string): boolean {
    if (
      (control.dirty || control.touched) &&
      this.hasError(control, errorName)
    ) {
      return true;
    }
    return false;
  }

  public hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  public lengthValidar(control: AbstractControl, errorName: string): number {
    const error = control.errors ? control.errors[errorName] : null;
    return error.requiredLength || error.min || error.max || 0;
  }
}
