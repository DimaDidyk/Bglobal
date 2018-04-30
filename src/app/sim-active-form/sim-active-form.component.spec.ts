import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimActiveFormComponent } from './sim-active-form.component';

describe('SimActiveFormComponent', () => {
  let component: SimActiveFormComponent;
  let fixture: ComponentFixture<SimActiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimActiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimActiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
