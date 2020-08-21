import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../static/person';

@Pipe({
  name: 'personFilter',
})
export class PersonFilterPipe implements PipeTransform {
  transform(persons: Person[], filterBy: string): Person[] {
    switch (filterBy) {
      case 'active':
        return persons.filter((person) => {
          return person.active;
        });
      case 'inactive':
        return persons.filter((person) => {
          return !person.active;
        });
      case 'male':
        return persons.filter((person) => {
          return person.sex == 'M';
        });
      case 'female':
        return persons.filter((person) => {
          return person.sex == 'F';
        });
      default:
        return persons;
    }
  }
}
