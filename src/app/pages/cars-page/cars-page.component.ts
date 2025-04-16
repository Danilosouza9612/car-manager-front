import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { IndexPageComponent, ListColumn } from '../../shared/pages/index-page/index-page.component';
import { BackendApiService } from '../../../service/backendApiService';
import { CarsBackendApiService } from '../../../service/carsBackendApiService';

@Component({
  selector: 'app-cars-page',
  imports: [MatTableModule, MatButtonModule, RouterModule, MatIcon, MatDialogModule, MatPaginatorModule],
  templateUrl: '../../shared/pages/index-page/index-page.component.html',
  styleUrls: ['../../shared/pages/index-page/index-page.component.scss'],
})
export class CarsPageComponent extends IndexPageComponent{
  constructor(private carBackendApiService: CarsBackendApiService) {
    super();
  }
  override get resource(): string {
    return 'cars'
  }
  override get listColumns(): ListColumn<any>[] {
    return [
      {
        name: 'licensePlate',
        title: 'License plate',
        dataMap: (data) => data.licensePlate
      },
      {
        name: 'model',
        title: 'Model',
        dataMap: (data) => data.model
      },
      {
        name: 'color',
        title: 'Color',
        dataMap: (data) => data.color
      },
      {
        name: 'year',
        title: 'Year',
        dataMap: (data) => data.year
      }
    ];
  }
  override get displayedColumns(): string[] {
    return ['licensePlate', 'model', 'color', 'year', 'actions'];
  }
  override get api(): BackendApiService {
    return this.carBackendApiService;
  }

}
