import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BaseCreateFormPageComponent } from '../../../shared/pages/base-create-form-page/base-create-form-page-component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { baseCarValidations } from '../base-validations';
import { CarsBackendApiService } from '../../../../service/carsBackendApiService';
import { Car } from '../../../../state/car/car';

@Component({
  selector: 'app-cars-create-form-page',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, CommonModule, MatDividerModule ],
  templateUrl: 'cars-create-form-page.component.html',
  styleUrl: './cars-create-form-page.component.scss'
})
export class CarsCreateFormPageComponent extends BaseCreateFormPageComponent<Car>{
  formGroup: FormGroup;

  constructor(router: Router, private fb: FormBuilder) {
    super(router, CarsBackendApiService);
    this.formGroup = this.fb.group(baseCarValidations);
  }

  get resource(): string{
    return 'cars';
  }
}
