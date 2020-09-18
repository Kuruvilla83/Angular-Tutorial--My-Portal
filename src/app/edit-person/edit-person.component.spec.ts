import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonComponent } from './edit-person.component';
import { of } from 'rxjs';
import { PersonService } from '../services/person.service';
import { FormsModule } from '@angular/forms';
import { Person } from '../static/person';

/*class PersonServiceMock {
  updatePerson(person: any) {
    return of();
  }
  getPerson(id) {
    return of({
      id: id,
      name: 'qssqd',
      address: '132328h',
      sex: 'F',
      active: true,
    });
  }
}*/

const person = {
  id: 1,
  name: 'qqqq',
  address: '123 qqqq',
  sex: 'M',
  active: true,
};

//Class always do have property and methods. We call any property by (this.propertyname)
class PersonServiceMock {
  person: Person = person;

  updatePerson(id: number, person: Person) {
    this.person = person;
    return of({});
  }

  getPerson(id) {
    return of(this.person);
  }
}

describe('EditPersonComponent', () => {
  let component: EditPersonComponent;
  let fixture: ComponentFixture<EditPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPersonComponent],
      imports: [FormsModule],
      providers: [
        { provide: PersonService, useValue: new PersonServiceMock() },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonComponent);
    component = fixture.componentInstance;
    component.id = person.id;
    component.close = () => {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
