import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenPackageComponent } from './chosen-package.component';

describe('ChosenPackageComponent', () => {
  let component: ChosenPackageComponent;
  let fixture: ComponentFixture<ChosenPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
