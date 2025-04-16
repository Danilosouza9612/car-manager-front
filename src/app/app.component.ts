import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftNavBarComponent } from './layout/left-nav-bar/left-nav-bar.component';
import { ToolbarComponent } from "./layout/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LeftNavBarComponent,
    ToolbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
}
