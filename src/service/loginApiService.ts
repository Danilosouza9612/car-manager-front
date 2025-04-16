import axios, { AxiosInstance, AxiosResponse } from "axios";
import { baseHeader, baseResourcePath, endpoint } from "./backendEntryPoint";

export interface LoginData{
  login: string;
  password: string;
}

export class LoginApiService{
  private axiosInstance: AxiosInstance;

  constructor(){
    this.axiosInstance = axios.create({
      baseURL: `${endpoint}${baseResourcePath}`,
    })
  }

  async signin(data: LoginData): Promise<any>{
    let response: AxiosResponse = await this.axiosInstance.post(`/signin`, data, {headers: baseHeader});
    return response.data;
  }
}