import { Pipe, PipeTransform } from '@angular/core';

// A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe

//An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.

// A change can be any button click, input change etc

@Pipe({
  name: 'convertCurrency'
  // pure: false
})
export class ConvertCurrencyPipe implements PipeTransform {

  // input | conversion : arg1 : arg2 : arg3
  // transform(input, args...)
  transform(value: number, code: string) {
    console.log("Pipe Called")
    if (isNaN(value)) return null;
    return this.convertValue(value, code);
  }

  convertValue(value: number, code: string) {
    console.log("convertValue")
    switch (code) {
      case 'USD':
        return (value /= 72);
      case 'EUR':
        return (value /= 98);
      case 'GBP':
        return (value /= 87);
      case 'CAD':
        return (value /= 52);
      default:
        return value;
    }
  }

}
