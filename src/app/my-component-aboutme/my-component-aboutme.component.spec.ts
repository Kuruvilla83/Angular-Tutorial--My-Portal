import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentAboutmeComponent } from './my-component-aboutme.component';

describe('MyComponentAboutmeComponent', () => {
  let component: MyComponentAboutmeComponent;
  let fixture: ComponentFixture<MyComponentAboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
