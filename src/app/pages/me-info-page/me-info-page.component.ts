import { Component } from '@angular/core';
import { MeBackendApiService } from '../../../service/meBackendApiService';
import { UserFull } from '../../../state/user/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-me-info-page',
  imports: [CommonModule],
  templateUrl: './me-info-page.component.html',
  styleUrl: './me-info-page.component.scss'
})
export class MeInfoPageComponent{
  data: UserFull | null = null;
  api: MeBackendApiService;

  constructor(api: MeBackendApiService){
    this.api = api;
    this.api.get().then((data: UserFull) => {
      this.data = data;
    })
  }
}
