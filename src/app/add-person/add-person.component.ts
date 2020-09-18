import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  userData = { name: '', address: '', sex: '', active: true };
  constructor(protected personService: PersonService) {}

  ngOnInit(): void {}
  /* istanbul ignore next*/
  submit(addUserForm) {
    this.addUser(this.userData);
  }
  // Any is a generic typw which means a object, boolean, string or what ever. A service injected by the constructor.
  /* istanbul ignore next*/
  addUser(person: any) {
    // Below code will take an instance of the class as it is already initiated.
    this.personService

      .createPerson(person)
      /* istanbul ignore next*/
      .subscribe((res) => {
        console.log(res);
      });
  }
}
