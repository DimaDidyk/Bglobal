import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimComponent } from './form-sim.component';

describe('FormSimComponent', () => {
  let component: FormSimComponent;
  let fixture: ComponentFixture<FormSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
