import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimOrderPageComponent } from './sim-order-page.component';

describe('SimOrderPageComponent', () => {
  let component: SimOrderPageComponent;
  let fixture: ComponentFixture<SimOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
