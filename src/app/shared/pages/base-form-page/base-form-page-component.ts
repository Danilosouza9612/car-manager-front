import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BackendApiService } from '../../../../service/backendApiService';

export enum FormType{
  CREATE = 'CREATE',
  UPDATE = 'UPDATE'
}

@Component({
    template: ''
})
export abstract class BaseFormPageComponent<T> {
  constructor(protected api: BackendApiService){}

  abstract get formGroup(): FormGroup

  onSubmit() {
    if (this.formGroup.valid) {
      this.handleSubmit(this.formGroup.value);
    } else {
      console.log('Form is invalid');
    }
  }

  handleError = (error: any) => {
    console.error(error.message);
  }

  abstract handleSubmit(data: T) : void;
  abstract get resource(): string
  abstract get formType(): FormType;
}