import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvatarBackendApiService } from '../../../../service/backendApiService';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  template: ''
})
export abstract class BaseUploadAvatarPageComponentComponent {
  protected form: FormGroup;
  protected id: number = 0;

  constructor(protected fb: FormBuilder, protected activatedRoute: ActivatedRoute) {
    this.form = this.fb.group({
      file: [null, Validators.required],
    });
    this.activatedRoute.params.pipe(tap(params => {
      this.id = params['id'];
    })).subscribe();
  }

  onSubmit(){
    if (this.form.valid) {
      this.api.uploadPhoto(this.id, this.form.controls['file'].value).then(this.doOnSuccess)
    }
  }

  setFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) this.form.patchValue({ file: input.files[0] });
  }

  abstract get doOnSuccess(): (data: any) => any;
  abstract get api(): AvatarBackendApiService;
  abstract get resource(): string;
  abstract get title(): string;
}
