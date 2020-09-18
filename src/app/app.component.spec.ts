import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// f means focus.And if defoine f in a methode under spec. it will run only the same it condition.

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
