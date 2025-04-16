import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCreateFormPageComponent } from './cars-create-form-page.component';

describe('CarsCreateFormPageComponent', () => {
  let component: CarsCreateFormPageComponent;
  let fixture: ComponentFixture<CarsCreateFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsCreateFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsCreateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
