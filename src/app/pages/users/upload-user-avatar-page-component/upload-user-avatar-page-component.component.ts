import { Component } from '@angular/core';
import { BaseUpdateFormPageComponent } from '../../../shared/pages/base-update-form-page/base-update-form-page-component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserBackendApiService } from '../../../../service/userBackendApiService';
import { BaseUploadAvatarPageComponentComponent } from '../../../shared/pages/base-upload-avatar-page-component/base-upload-avatar-page-component.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AvatarBackendApiService } from '../../../../service/backendApiService';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-upload-user-avatar-page-component',
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: '../../../shared/pages/base-upload-avatar-page-component/base-upload-avatar-page-component.component.html'
})
export class UploadUserAvatarPageComponentComponent extends BaseUploadAvatarPageComponentComponent {

  constructor(override fb: FormBuilder, override activatedRoute:ActivatedRoute, private backendApiService: UserBackendApiService, private router: Router) {
    super(fb, activatedRoute);
  }

  override get doOnSuccess(): (data: any) => any {
    return (data) => {
      this.backendApiService.get(this.id).then((user) => {
        this.router.navigate(['/', 'users', user.id]);
      });
      return null;
    };
  }

  override get api(): AvatarBackendApiService {
    return this.backendApiService;
  }

  override get title(): string {
    return 'User';
  }

  get resource(): string {
    return 'users'
  }

}
