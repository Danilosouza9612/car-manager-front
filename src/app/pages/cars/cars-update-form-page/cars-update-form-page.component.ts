import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { BaseUpdateFormPageComponent } from '../../../shared/pages/base-update-form-page/base-update-form-page-component';
import { Car } from '../../../../state/car/car';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CarsBackendApiService } from '../../../../service/carsBackendApiService';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { baseCarValidations } from '../base-validations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-update-form-page',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, CommonModule, MatDividerModule ],
  templateUrl: './cars-update-form-page.component.html',
  styleUrl: './cars-update-form-page.component.scss'
})
export class CarsUpdateFormPageComponent extends BaseUpdateFormPageComponent<Car>{
  private carForm: FormGroup;

  constructor(override router: Router, override activatedRoute: ActivatedRoute, private fb: FormBuilder){
    super(router, activatedRoute, CarsBackendApiService);
    this.carForm = this.fb.group(baseCarValidations)
  }

  override get formGroup(): FormGroup<any> {
    return this.carForm;
  }

  override get resource(): string {
    return 'cars';
  }
}
