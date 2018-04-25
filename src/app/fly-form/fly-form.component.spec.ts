import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyFormComponent } from './fly-form.component';

describe('FlyFormComponent', () => {
  let component: FlyFormComponent;
  let fixture: ComponentFixture<FlyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
