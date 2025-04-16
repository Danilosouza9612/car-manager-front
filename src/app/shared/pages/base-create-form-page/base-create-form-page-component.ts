import { Component } from '@angular/core';
import { BaseFormPageComponent, FormType } from '../base-form-page/base-form-page-component';
import { Router } from '@angular/router';

@Component({
    template:''
})
export abstract class BaseCreateFormPageComponent<T> extends BaseFormPageComponent<T>{

  constructor(protected router: Router, classRef: Function){
      super(classRef);
  }

  override handleSubmit(data: T): void {
      this.api.create(data).then(this.handleSuccess, this.handleError);
  }

  handleSuccess = (data: T) => {
      console.log(data);
      this.router.navigate(['/' + this.resource]);
  }

  get formType(): FormType {
      return FormType.CREATE;
  }
}