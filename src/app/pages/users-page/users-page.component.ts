import { Component } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IndexPageComponent, ListColumn } from '../../shared/pages/index-page/index-page.component';

@Component({
  selector: 'app-users-page',
  imports: [IndexPageComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {
  title = "Users";
  resource = "users"
  listColumns: ListColumn<any>[] = [
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
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'birthday', 'phone', 'actions'];
}