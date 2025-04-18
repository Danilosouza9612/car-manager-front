import { Component } from '@angular/core';
import { BaseShowPageComponent } from '../../../shared/pages/base-show-page/base-show-page.component';
import { Car } from '../../../../state/car/car';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarsBackendApiService } from '../../../../service/carsBackendApiService';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-show-page',
  imports: [RouterLink, MatButtonModule, CommonModule, MatButtonModule],
  templateUrl: './cars-show-page.component.html',
  styleUrl: './cars-show-page.component.scss'
})
export class CarsShowPageComponent extends BaseShowPageComponent<Car>{

  constructor(override activatedRoute: ActivatedRoute) {
    super(activatedRoute, CarsBackendApiService);
  }

  override get resource(): string {
    return 'cars'
  }
}
