import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function DateRangeValidator(controlRef: AbstractControl,
                            comp: (a: number, b: number) => boolean): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    if(controlRef.value && control.value) {
      const refDate = new Date(controlRef.value).valueOf();
      const controlDate = new Date(control.value).valueOf()
      return comp(controlDate, refDate) ? null : {dateIsLessThanMinimum: {value: control.value}};
    } else {
      return null;
    }
  }
}
