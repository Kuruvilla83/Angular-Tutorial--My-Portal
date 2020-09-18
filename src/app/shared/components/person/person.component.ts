import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/static/person';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  //It is basically inputing valure from his parent (dynamically..). Input is the person whixh is bringing in the data of that person and output is the event after delete action
  @Input() person: Person;

  @Output() deletePerson = new EventEmitter();
  //@Input() deletePerson;

  @Output() editPerson = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  // Here we are emitting the id of the person during an event
  /* istanbul ignore next*/
  delete() {
    this.deletePerson.emit(this.person.id);
  }
  /* istanbul ignore next*/
  edit() {
    this.editPerson.emit(this.person.id);
  }
}
