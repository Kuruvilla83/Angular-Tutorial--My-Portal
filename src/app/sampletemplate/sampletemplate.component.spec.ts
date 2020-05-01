import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletemplateComponent } from './sampletemplate.component';

describe('SampletemplateComponent', () => {
  let component: SampletemplateComponent;
  let fixture: ComponentFixture<SampletemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampletemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
