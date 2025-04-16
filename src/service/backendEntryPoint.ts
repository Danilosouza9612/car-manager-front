import axios, { AxiosInstance } from "axios";
import { SessionStore } from "../state/sessionStore";
import { tap } from "rxjs";

export const endpoint = "http://localhost:8080"
export const baseResourcePath = "/api"

export const baseHeader = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Origin': '*'
}

export abstract class AuthenticatedBackendApiService{
  protected axiosInstance: AxiosInstance;
  protected token: String | null = null;
  protected resource: string;
  protected requestBaseHeader: any;

  constructor(protected sessionStore: SessionStore){
    this.axiosInstance = axios.create({
      baseURL: `${endpoint}${baseResourcePath}`,
    })
    this.resource = "cars";
    sessionStore.token$.pipe(tap(tokenState => this.token = tokenState)).subscribe();
    this.requestBaseHeader = {...baseHeader, Authorization: `Bearer ${this.token}`};
  }
}