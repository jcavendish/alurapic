import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
  if (control.value.trim() && /[A-Z]/.test(control.value)) {
    return {lowerCaseValidation: true};
  }
  return null;
}