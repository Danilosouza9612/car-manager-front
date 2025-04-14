import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";

export interface UserState {
  users: User[],
  selectedUser?: User
}


@Injectable({
  providedIn: 'root'
})
export class UserStateService{
  private state$: BehaviorSubject<UserState> = new BehaviorSubject<UserState>({users: []});

  list(page: number, perPage: 10){

  }
}