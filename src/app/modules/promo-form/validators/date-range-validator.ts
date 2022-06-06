import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function DateRangeValidator(minDateReference: FormControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return {dateIsLessThanMinimum: {value: control.value}}
  }
}
