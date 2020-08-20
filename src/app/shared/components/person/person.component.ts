import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/static/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  //It is basically inputing valure from his parent (dynamically..)
  @Input() person: Person;

  constructor() {}

  ngOnInit(): void {}
}
