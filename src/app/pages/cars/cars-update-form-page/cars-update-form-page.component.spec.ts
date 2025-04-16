import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsUpdateFormPageComponent } from './cars-update-form-page.component';

describe('CarsUpdateFormPageComponent', () => {
  let component: CarsUpdateFormPageComponent;
  let fixture: ComponentFixture<CarsUpdateFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsUpdateFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsUpdateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
