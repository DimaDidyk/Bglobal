import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCountriesComponent } from './available-countries.component';

describe('AvailableCountriesComponent', () => {
  let component: AvailableCountriesComponent;
  let fixture: ComponentFixture<AvailableCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
