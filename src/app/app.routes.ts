import { Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { UsersCreateFormPageComponent } from './pages/users/users-create-form-page/users-create-form-page-component';
import { UsersUpdateFormPageComponent } from './pages/users/users-update-form-page/users-update-form-page-component';
import { UsersShowPageComponent } from './pages/users/users-show-page/users-show-page-component';

export const routes: Routes = [
    { path: 'users', component: UsersPageComponent },
    { path: 'users/create', component: UsersCreateFormPageComponent },
    { path: 'users/:id', component: UsersShowPageComponent },
    { path: 'users/:id/edit', component: UsersUpdateFormPageComponent },
    { path: 'cars', component: CarsPageComponent },
];
