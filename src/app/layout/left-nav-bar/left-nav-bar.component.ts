import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatNavList, MatListItem } from '@angular/material/list';

interface NavbarItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-left-nav-bar',
  imports: [
    MatNavList,
    MatListItem,
    RouterLink
  ],
  templateUrl: './left-nav-bar.component.html',
  styleUrl: './left-nav-bar.component.scss'
})
export class LeftNavBarComponent {
  items:NavbarItem[] = [
    {
      name: 'Users',
      url: '/users'
    },
    {
      name: 'Cars',
      url: '/cars'
    }
  ]
}
