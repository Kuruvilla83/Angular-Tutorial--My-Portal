import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponentTestComponent } from './my-component-test.component';
import { Observable, of } from 'rxjs';
import { Person } from '../static/person';
import { PersonService } from '../services/person.service';
import { PersonSorterPipe } from '../shared/person-sorter.pipe';
import { PersonFilterPipe } from '../shared/person-filter.pipe';

const personArray = [
  { id: 1, name: 'Dummy1', address: '123 Dummy1', sex: 'M', active: true },
  { id: 2, name: 'Dummy2', address: '123 Dummy2', sex: 'M', active: true },
];
// Here we are returning the static mock data. Below we set to returnable observable person array. Observable is a type contain data
class PersonServiceMock {
  getPersons(): Observable<Person[]> {
    // return this.http.get<Person>(`${this.baseUrl}/${id}`);
    return of(personArray);
  }
  deletePerson(id) {
    //return this.http.delete(this.baseUrl + '/' + id);. Below we are passing an empty object in curly bracket.
    return of({});
  }
}

describe('MyComponentTestComponent', () => {
  let component: MyComponentTestComponent;
  let fixture: ComponentFixture<MyComponentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyComponentTestComponent,
        PersonSorterPipe,
        PersonFilterPipe,
      ],
      providers: [
        { provide: PersonService, useValue: new PersonServiceMock() },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
