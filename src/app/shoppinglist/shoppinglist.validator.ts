import { AbstractControl } from '@angular/forms';

export function ValidateWhitespace(control: AbstractControl): { [key: string]: boolean } | null {
    let isValid = control.value.trim().length >= 3;

    return isValid ? null : { 'whitespace': true };
}
