import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  //IMPORTANT: pure can cause performance issues due to updating every time anything on the page changes, but will 
  //use it here to demonstrate the sort works even when adding new servers
  pure: false
})
export class SortPipe implements PipeTransform {

  //reverse alphabet will sort Z-A if true, else A-Z
  transform(value: object[], keyName: string, reverseAlphabet: boolean = false): any {

    value.sort((a,b) => {
      //note that the sorting requires an array of objects to be passed in that all have the specified 'keyName' as a key
      return (a[keyName]).localeCompare((b[keyName])) * (reverseAlphabet ? -1 : 1);
    })
    return value;
  }

}
