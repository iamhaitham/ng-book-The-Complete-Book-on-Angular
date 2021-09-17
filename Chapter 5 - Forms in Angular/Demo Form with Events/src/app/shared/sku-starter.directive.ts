import { AbstractControl, ValidationErrors,ValidatorFn } from "@angular/forms";

AbstractControl
export function skuValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const allowedSkuStarted = nameRe.test(control.value);
      return allowedSkuStarted ? null : {invalidSku: {value: control.value}};
    };
  }