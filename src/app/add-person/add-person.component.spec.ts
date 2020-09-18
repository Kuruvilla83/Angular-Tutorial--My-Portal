import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonComponent } from './add-person.component';
import { of } from 'rxjs';
import { PersonService } from '../services/person.service';
import { FormsModule } from '@angular/forms';

class PersonServiceMock {
  createPerson(persons) {
    return of({});
  }
}

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPersonComponent],
      imports: [FormsModule],
      providers: [
        { provide: PersonService, useValue: new PersonServiceMock() },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
