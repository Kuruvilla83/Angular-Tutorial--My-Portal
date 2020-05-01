import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentContactusComponent } from './my-component-contactus.component';

describe('MyComponentContactusComponent', () => {
  let component: MyComponentContactusComponent;
  let fixture: ComponentFixture<MyComponentContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
