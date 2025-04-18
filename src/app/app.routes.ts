import { Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { UsersCreateFormPageComponent } from './pages/users/users-create-form-page/users-create-form-page-component';
import { UsersUpdateFormPageComponent } from './pages/users/users-update-form-page/users-update-form-page-component';
import { UsersShowPageComponent } from './pages/users/users-show-page/users-show-page-component';
import { SessionActivate } from './activate/SessionActivate';
import { CarsCreateFormPageComponent } from './pages/cars/cars-create-form-page/cars-create-form-page.component';
import { CarsUpdateFormPageComponent } from './pages/cars/cars-update-form-page/cars-update-form-page.component';
import { CarsShowPageComponent } from './pages/cars/cars-show-page/cars-show-page.component';
import { MeInfoPageComponent } from './pages/me-info-page/me-info-page.component';
import { UploadCarAvatarPageComponentComponent } from './pages/cars/upload-car-avatar-page-component/upload-car-avatar-page-component.component';
import { UploadUserAvatarPageComponentComponent } from './pages/users/upload-user-avatar-page-component/upload-user-avatar-page-component.component';

export const routes: Routes = [
    { path: 'users', component: UsersPageComponent },
    { path: 'users/create', component: UsersCreateFormPageComponent },
    { path: 'users/:id', component: UsersShowPageComponent },
    { path: 'users/:id/edit', component: UsersUpdateFormPageComponent },
    { path: 'users/:id/upload_photo', component: UploadUserAvatarPageComponentComponent },
    { path: 'me', component: MeInfoPageComponent, canActivate:[SessionActivate] },
    { path: 'cars', component: CarsPageComponent, canActivate:[SessionActivate] },
    { path: 'cars/create', component: CarsCreateFormPageComponent, canActivate:[SessionActivate] },
    { path: 'cars/:id/edit', component: CarsUpdateFormPageComponent, canActivate:[SessionActivate] },
    { path: 'cars/:id', component: CarsShowPageComponent, canActivate:[SessionActivate] },
    { path: 'cars/:id/upload_photo', component: UploadCarAvatarPageComponentComponent, canActivate:[SessionActivate] },
];
