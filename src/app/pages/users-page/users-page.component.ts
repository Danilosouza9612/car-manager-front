import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { IndexPageComponent, ListColumn } from '../../shared/pages/index-page/index-page.component';
import { UserBackendApiService } from '../../../service/userBackendApiService';
import { BackendApiService } from '../../../service/backendApiService';

@Component({
  selector: 'app-users-page',
  imports: [MatTableModule, MatButtonModule, RouterModule, MatIcon, MatDialogModule, MatPaginatorModule],
  templateUrl: '../../shared/pages/index-page/index-page.component.html',
  styleUrls: ['../../shared/pages/index-page/index-page.component.scss'],
})
export class UsersPageComponent extends IndexPageComponent{

  constructor(private userBackendApiService: UserBackendApiService) {
    super();
  }

  override get resource(): string {
    return 'users'
  }

  override get listColumns(): ListColumn<any>[] {
    return [
      {
        name: 'firstName',
        title: 'First name',
        dataMap: (data) => data.firstName
      },
      {
        name: 'lastName',
        title: 'Last name',
        dataMap: (data) => data.lastName
      },
      {
        name: 'email',
        title: 'E-mail',
        dataMap: (data) => data.email
      },
      {
        name: 'birthday',
        title: 'Birth day',
        dataMap: (data) => data.birthday
      },
      {
        name: 'phone',
        title: 'Phone number',
        dataMap: (data) => data.phone
      }
    ];
  }

  override get displayedColumns(): string[] {
    return ['firstName', 'lastName', 'email', 'birthday', 'phone', 'actions'];
  }

  override get api(): BackendApiService {
    return this.userBackendApiService;
  }
}