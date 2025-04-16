import { Component, OnInit } from "@angular/core";
import { BaseFormPageComponent, FormType } from "../base-form-page/base-form-page-component";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    template: ''
})
export abstract class BaseUpdateFormPageComponent<T> extends BaseFormPageComponent<T> implements OnInit{
  id: number = 0;
  constructor(protected router: Router, protected activatedRoute: ActivatedRoute, classRef: Function) {
    super(classRef);
  }

  get formType(): FormType{
    return FormType.UPDATE;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.api.get(this.id).then((data: any) => {
        this.formGroup.patchValue(data);
      });
    });
  }

  override handleSubmit(data: T): void {
    this.api.update(this.id, data).then(this.handleSuccess).catch(this.handleError);
  }

  handleSuccess = (data: any) => {
    this.router.navigate(['/', this.resource, this.id]);
  }
}