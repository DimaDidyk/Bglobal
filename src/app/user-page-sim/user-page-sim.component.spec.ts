import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageSimComponent } from './user-page-sim.component';

describe('UserPageSimComponent', () => {
  let component: UserPageSimComponent;
  let fixture: ComponentFixture<UserPageSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
