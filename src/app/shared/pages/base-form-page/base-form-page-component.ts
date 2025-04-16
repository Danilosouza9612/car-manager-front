import { Component, inject } from '@angular/core';
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
  protected api : BackendApiService;
  constructor(classRef: Function){
    this.api = inject(classRef);
  }

  abstract get formGroup(): FormGroup

  onSubmit() {
    if (this.formGroup.valid) {
      this.handleSubmit(this.formGroup.value);
    } else {
      console.log('Form is invalid');
    }
  }

  handleError = (error: any) => {
    console.error(error);
  }

  abstract handleSubmit(data: T) : void;
  abstract get resource(): string
  abstract get formType(): FormType;
}