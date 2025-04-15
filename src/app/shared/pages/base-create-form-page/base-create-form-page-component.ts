import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormPageComponent, FormType } from '../base-form-page/base-form-page-component';
import { Route, Router } from '@angular/router';
import { BackendApiService } from '../../../../service/backendApiService';

@Component({
    template:''
})
export abstract class BaseCreateFormPageComponent<T> extends BaseFormPageComponent<T>{

  constructor(override api: BackendApiService, protected router: Router){
      super(api);
  }

  override handleSubmit(data: T): void {
      this.api.create(this.resource, data).then(this.handleSuccess, this.handleError);
  }

  handleSuccess = (data: T) => {
      console.log(data);
      this.router.navigate(['/' + this.resource]);
  }

  get formType(): FormType {
      return FormType.CREATE;
  }
}