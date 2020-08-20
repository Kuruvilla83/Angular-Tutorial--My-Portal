import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../static/person';

@Pipe({
  name: 'personSorter',
})
export class PersonSorterPipe implements PipeTransform {
  transform(value: Person[]): Person[] {
    //Returning an argument as we are creating our own custom function. Sort can only happen on arrays...
    return value.sort((a, b) => {
      // localecompare is build in javascript
      return a.name.localeCompare(b.name);
    });
  }
}
