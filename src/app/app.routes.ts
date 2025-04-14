import { Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';

export const routes: Routes = [
    { path: 'users', component: UsersPageComponent },
    { path: 'cars', component: CarsPageComponent }
];
