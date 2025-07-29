import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padZero'
})
export class PadZeroPipe implements PipeTransform {
  transform(value: number): string {
    if(typeof value != 'number') return '';
    let strValue = value.toString();
    return strValue.length === 1 ? `0${strValue}` : strValue;
  }
}
