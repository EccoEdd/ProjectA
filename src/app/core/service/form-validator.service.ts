import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  allFields(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  field(form: FormGroup, validationType: string, field: string): boolean {
    const control = form.get(field);

    if (control && control.hasError(validationType) &&
      (control.dirty || control.touched)) {
      control.markAsDirty({ onlySelf: true });
      return true;
    }

    return false;
  }

  fieldOnly(control: FormControl, validationType: string): boolean {
    if (control.hasError(validationType) && (control.dirty || control.touched)) {
      control.markAsDirty({ onlySelf: true });
      return true;
    }
    return false;
  }

  markDirtyField(control: FormControl): void {
    control.markAsDirty({ onlySelf: true });
    control.markAsTouched({ onlySelf: true });
  }
}
