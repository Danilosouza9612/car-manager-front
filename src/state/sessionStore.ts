import { BehaviorSubject, map, Observable, Subject } from "rxjs";
import { LoginApiService, LoginData } from "../service/loginApiService"
import { Injectable } from "@angular/core";

export interface SessionState{
  token: string | null;
  processing: boolean
  errors: any | null;
}

@Injectable({
  providedIn: 'root'
})
export class SessionStore{
  private state$: BehaviorSubject<SessionState>;
  private api: LoginApiService;
  
  constructor(){
    this.api = new LoginApiService;
    this.state$ = new BehaviorSubject<SessionState>({token: null, processing: false, errors: null});
  }

  signIn(data: LoginData){
    this.state$.next({...this.state$.value, processing: true});
    this.api.signin(data).then((response) => {
      this.state$.next({token: response.token, processing: false, errors: null});
    }).catch((error) => {
      this.state$.next({token: null, processing: false,  errors: error.response});
    });
  }

  signOut(){
    this.state$.next({...this.state$.value, token: null, processing: false});
  }

  get isLogged$(): Observable<boolean>{
    return this.state$.pipe(map(state => state.token !== null))
  }

  get isInvalidLogin$(): Observable<boolean>{
    return this.state$.pipe(map(state => state.errors?.status == 401))
  }

  get token$(): Observable<string | null>{
    return this.state$.pipe(map(state => state.token))
  }

}