import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {

    //any easier solution would be this one line
    //return value.split('').reverse().join('')


    let reverseString = ''
    for(let i = value.length-1; i >= 0; i--)
    {
      reverseString += value[i];
    }
    return reverseString;
  }

}
