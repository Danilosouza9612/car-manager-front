import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BackendApiService } from "./backendApiService";
import { AuthenticatedBackendApiService, baseHeader, baseResourcePath, endpoint } from "./backendEntryPoint";
import { SessionStore } from '../state/sessionStore';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CarsBackendApiService extends AuthenticatedBackendApiService implements BackendApiService {
    constructor(override sessionStore: SessionStore){
        super(sessionStore);
        this.resource = "cars";
    }

    async list(params?: any, header?: any){
        let response = await this.axiosInstance.get(`/${this.resource}`, { headers: {...this.requestBaseHeader, header}, params: params});
        return response.data;
    }

    async get(id:number, header?: any){
        let response:AxiosResponse = await this.axiosInstance.get(`/${this.resource}/${id}`, { headers: {...this.requestBaseHeader, header}})
        return response.data;
    }

    async create(data: any, header?: any){
        let response = await this.axiosInstance.post(`/${this.resource}`, data, { headers: {...this.requestBaseHeader, header}});
        return response.data;
    }

    async update(id:number, data: any, header?: any){
        let response = await this.axiosInstance.put(`/${this.resource}/${id}`, data, { headers: {...this.requestBaseHeader, header}});
        return response.data;
    }

    async delete(id: number){
        let response = await this.axiosInstance.delete(`/${this.resource}/${id}`, { headers: this.requestBaseHeader});
        return response.data;
    }
    
}