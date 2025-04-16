import { CanActivate } from "@angular/router";
import { SessionStore } from "../../state/sessionStore";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class SessionActivate implements CanActivate{
  constructor(private sessionStore: SessionStore){}

  canActivate(): boolean {
    let isLogged: boolean = false;
    this.sessionStore.isLogged$.pipe(tap(
      (isLoggedState) => isLogged = isLoggedState
    )).subscribe();
    return isLogged;
  }
}