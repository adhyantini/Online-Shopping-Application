import { AbstractControl } from '@angular/forms';

export function validCodeValidation(
  control: AbstractControl
): { [key: string]: boolean } {
  let validCodesArr: string[] = ['CODE12', 'CODE45', 'CODE54'];
  if (validCodesArr.indexOf(control.value) >= 0) return null;
  else return { invalidCode: true };
}
