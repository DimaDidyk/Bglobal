import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningCustomerPageComponent } from './returning-customer-page.component';

describe('ReturningCustomerPageComponent', () => {
  let component: ReturningCustomerPageComponent;
  let fixture: ComponentFixture<ReturningCustomerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturningCustomerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturningCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
