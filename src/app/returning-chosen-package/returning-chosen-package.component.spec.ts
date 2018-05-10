import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningChosenPackageComponent } from './returning-chosen-package.component';

describe('ReturningChosenPackageComponent', () => {
  let component: ReturningChosenPackageComponent;
  let fixture: ComponentFixture<ReturningChosenPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturningChosenPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturningChosenPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
