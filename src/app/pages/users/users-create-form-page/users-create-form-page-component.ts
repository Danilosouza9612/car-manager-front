import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { UserCreation } from '../../../../state/user/user';
import { BackendApiService } from '../../../../service/backendApiService';
import { Router } from '@angular/router';
import { BaseCreateFormPageComponent } from '../../../shared/pages/base-create-form-page/base-create-form-page-component';
import { baseCreateValidations, baseValidations } from '../base-validations';


@Component({
  selector: 'app-create-users-form-page',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, CommonModule, MatDividerModule ],
  templateUrl: '../users-form/users-create-form-page-component.html',
  styleUrl: '../users-form/users-create-form-page-component.scss'
})
export class UsersCreateFormPageComponent extends BaseCreateFormPageComponent<UserCreation>{
  userForm: FormGroup;

  constructor(override api:BackendApiService, override router: Router, private fb: FormBuilder) {
    super(api, router);
    this.userForm = this.fb.group({
      ...baseCreateValidations,
      cars: this.fb.array([])
    });
  }

  get cars(): FormArray{
    return this.userForm.controls['cars'] as FormArray;
  }

  get formGroup(): FormGroup {
    return this.userForm;
  }

  get resource(): string{
    return 'users';
  }

  addCarForm(){
    let carForm: FormGroup = this.fb.group({
      licensePlate: ['', [Validators.required, Validators.maxLength(7), Validators.minLength(7)]],
      model: ['', Validators.required],
      color: ['', Validators.required],
      year: [2000, [Validators.required]]
    })

    this.cars.push(carForm);
  }

  deleteCarForm(i: number){
    this.cars.removeAt(i);
  }
}
