import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseUpdateFormPageComponent } from '../../../shared/pages/base-update-form-page/base-update-form-page-component';
import { BackendApiService } from '../../../../service/backendApiService';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../state/user/user';
import { baseValidations } from '../base-validations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-users-update-form-page',
    templateUrl: './users-update-form-page-component.html',
    styleUrl: '../users-form/users-create-form-page-component.scss',
    imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, CommonModule, MatDividerModule ],
})
export class UsersUpdateFormPageComponent extends BaseUpdateFormPageComponent<User> {
  userForm: FormGroup;

  constructor(override api:BackendApiService, override router: Router, override activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    super(api, router, activatedRoute);
    this.userForm = this.fb.group(baseValidations);
  }

  get formGroup(): FormGroup {
    return this.userForm;
  }

  get resource(): string {
    return 'users';
  }
}