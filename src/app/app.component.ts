import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendApiService } from '../service/backendApiService';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LeftNavBarComponent } from './layout/left-nav-bar/left-nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LeftNavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
}
