import { Component } from '@angular/core';
import { BaseUploadAvatarPageComponentComponent } from '../../../shared/pages/base-upload-avatar-page-component/base-upload-avatar-page-component.component';
import { CarsBackendApiService } from '../../../../service/carsBackendApiService';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-upload-car-avatar-page-component',
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: '../../../shared/pages/base-upload-avatar-page-component/base-upload-avatar-page-component.component.html',
})
export class UploadCarAvatarPageComponentComponent extends BaseUploadAvatarPageComponentComponent {
  get api() {
    return this.carApi;
  }

  get title() {
    return 'Car'
  }

  get resource() {
    return 'cars';
  }

  constructor(override fb: FormBuilder, override activatedRoute: ActivatedRoute, private carApi: CarsBackendApiService, private router: Router) {
    super(fb, activatedRoute);
  }

  get doOnSuccess(){
    return (data: any) => {
      this.router.navigate(['/', 'cars', this.id])
      return null;
    }
  }
}
