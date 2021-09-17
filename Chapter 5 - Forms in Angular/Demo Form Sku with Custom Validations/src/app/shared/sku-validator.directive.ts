import { ValidatorFn,ValidationErrors,AbstractControl } from "@angular/forms";

export function skuValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const allowedSku = nameRe.test(control.value);
      return allowedSku ? null : {invalidSku: {value: control.value}};
    };
  }