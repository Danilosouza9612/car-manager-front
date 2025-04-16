import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { SessionStore } from '../../../state/sessionStore';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login-dialog',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatDialogModule, MatButton, MatInput],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private sessionStore: SessionStore) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.minLength(6)]]
    });
    sessionStore.isInvalidLogin$.pipe(tap((isInvalid) => {
      if (isInvalid) {
        console.log("Invalid here");
        this.loginForm.get('login')?.setErrors({ invalid: true });
        this.loginForm.get('password')?.setErrors({ invalid: true });
      }
    })).subscribe();
  }

  onSubmit() {
    if (this.loginForm.valid) this.sessionStore.signIn(this.loginForm.value);
  }
}
