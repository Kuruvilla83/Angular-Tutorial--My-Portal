import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../static/person';
import { PersonService } from '../services/person.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  @Input() id: number;
  @Input() close;
  @Output() updated: EventEmitter<boolean> = new EventEmitter();
  userData: Person;
  constructor(private personService: PersonService) {
    console.log(`User ID`, this.id);
  }

  ngOnInit(): void {
    this.personService.getPerson(this.id).subscribe((person) => {
      console.log('This Person', person);
      this.userData = person;
    });
  }

  submit() {
    this.personService.updatePerson(this.id, this.userData).subscribe(
      () => {
        console.log('Person Updated');
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.updated.emit(true);
        this.close();
      }
    );
  }
}
