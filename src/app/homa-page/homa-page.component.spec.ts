import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomaPageComponent } from './homa-page.component';

describe('HomaPageComponent', () => {
  let component: HomaPageComponent;
  let fixture: ComponentFixture<HomaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
