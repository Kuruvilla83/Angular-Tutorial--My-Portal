import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../static/person';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPersonComponent } from '../edit-person/edit-person.component';

@Component({
  selector: 'app-my-component-test',
  templateUrl: './my-component-test.component.html',
  styleUrls: ['./my-component-test.component.css'],
})
export class MyComponentTestComponent implements OnInit {
  //persons: any[];
  // We are initilizing it with an empty Array
  persons: Person[] = [];
  date: Date;
  filter = '';

  constructor(
    protected personService: PersonService,
    protected modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getPersons();
    this.date = new Date();
  }
  /* istanbul ignore next*/
  filterBy(filterBy: string) {
    this.filter = filterBy;
  }

  // Here we are using 3 arguments to see user deleted. Below argument patterns are standard ones for observable under angular.
  /* istanbul ignore next*/
  deleteUser(id) {
    this.personService.deletePerson(id).subscribe(
      (res) => {
        console.log('userDeleted'); //this argument is on sucess
      },
      (err) => {
        console.log(err); //this argument is on error
      },
      () => {
        this.getPersons(); //this argument is on complete
      }
    );
    console.log(id);
  }
  /* istanbul ignore next*/
  openEditUserModal(id) {
    // Constant is a keyword for setting of a variable name.
    const modalRef = this.modalService.open(EditPersonComponent);
    // Component Instance is a function from ngbModel Service
    modalRef.componentInstance.id = id;
    // () is a method we defining during the fly which calls as arrow funtion also lambda function.
    //ES6 arrow functions in youtube.
    modalRef.componentInstance.updated.subscribe(() => {
      this.getPersons();
    });
    modalRef.componentInstance.close = () => {
      modalRef.close();
      // this.getPersons();
    };
  }
  // On observables subscribables will do action
  getPersons() {
    this.personService.getPersons().subscribe((persons) => {
      console.log(persons);
      this.persons = persons;
    });
  }
}
