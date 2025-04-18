import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { endpoint, baseResourcePath, baseHeader} from './backendEntryPoint'
import { AvatarBackendApiService, BackendApiService } from './backendApiService';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserBackendApiService implements BackendApiService, AvatarBackendApiService {
    private axiosInstance: AxiosInstance;
    private resource: string

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: `${endpoint}${baseResourcePath}`,
        })
        this.resource = "users";
    }

    async list(params?: any, header?: any){
        let response = await this.axiosInstance.get(`/${this.resource}`, { headers: {...baseHeader, header}, params: params});
        return response.data;
    }

    async get(id:number, header?: any){
        let response:AxiosResponse = await this.axiosInstance.get(`/${this.resource}/${id}`, { headers: {...baseHeader, header}})
        return response.data;
    }

    async create(data: any, header?: any){
        let response = await this.axiosInstance.post(`/${this.resource}`, data, { headers: {...baseHeader, header}});
        return response.data;
    }

    async update(id:number, data: any, header?: any){
        let response = await this.axiosInstance.put(`/${this.resource}/${id}`, data, { headers: {...baseHeader, header}});
        return response.data;
    }

    async delete(id: number){
        let response = await this.axiosInstance.delete(`/${this.resource}/${id}`, { headers: baseHeader});
        return response.data;
    }

    async uploadPhoto(id: number, file: File, header?: any) {
        const formData = new FormData();
        formData.append('file', file);
        let response = await this.axiosInstance.post(`/${this.resource}/${id}/upload_photo`, formData, { headers: {...baseHeader, 'Content-Type': 'multipart/form-data', header}});
        return response.data;
    }
}
