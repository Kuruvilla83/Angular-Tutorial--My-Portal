import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../static/person';

@Component({
  selector: 'app-my-component-test',
  templateUrl: './my-component-test.component.html',
  styleUrls: ['./my-component-test.component.css'],
})
export class MyComponentTestComponent implements OnInit {
  //persons: any[];
  persons: Person[];
  date: Date;
  filter = '';

  constructor(protected personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe((persons) => {
      console.log(persons);
      this.persons = persons;
    });

    this.date = new Date();
  }

  filterBy(filterBy: string) {
    this.filter = filterBy;
  }
}
