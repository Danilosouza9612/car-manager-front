import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SessionStore } from '../../../state/sessionStore';
import { Observable, tap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, AsyncPipe, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent{
  isLogged$: Observable<boolean>;
  dialogRef: MatDialogRef<LoginDialogComponent> | null = null;
  constructor(private matDialog: MatDialog, private sessionStore: SessionStore){  
    this.isLogged$ = sessionStore.isLogged$;
    this.isLogged$.pipe(tap(
      (isLogged) => {
        if (isLogged) this.dialogRef?.close();
      }
    )).subscribe();
  }

  login(){
    this.dialogRef = this.matDialog.open(LoginDialogComponent, {
      width: '300px',
    });
  }

  logout(){
    this.sessionStore.signOut();
  }
}
