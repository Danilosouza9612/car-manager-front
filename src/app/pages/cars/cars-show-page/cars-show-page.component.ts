import { Component } from '@angular/core';
import { BaseShowPageComponent } from '../../../shared/pages/base-show-page/base-show-page.component';
import { Car } from '../../../../state/car/car';
import { ActivatedRoute } from '@angular/router';
import { CarsBackendApiService } from '../../../../service/carsBackendApiService';

@Component({
  selector: 'app-cars-show-page',
  imports: [],
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
