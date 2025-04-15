import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { endpoint, baseResourcePath} from './backendEntryPoint'
import { Injectable } from '@angular/core';

const baseHeader = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
}


@Injectable({
    providedIn: 'root'
})
export class BackendApiService{
    private axiosInstance: AxiosInstance;

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: `${endpoint}${baseResourcePath}`,
        })
    }

    async list(resource: string, params?: any, config?: any){
        let response = await this.axiosInstance.get(`/${resource}`, { headers: baseHeader, params: params});
        return response.data;
    }

    async get(resource: string, id:number, config?: any){
        let response:AxiosResponse = await this.axiosInstance.get(`/${resource}/${id}`, config);
        return response.data;
    }

    async create(resource: string, data: any, config?: any){
        let response = await this.axiosInstance.post(`/${resource}`, data, config);
        return response.data;
    }

    async update(resource: string, id:number, data: any, config?: any){
        let response = await this.axiosInstance.put(`/${resource}/${id}`, data, config);
        return response.data;
    }

    async delete(resource: string, id: number){
        let response = await this.axiosInstance.delete(`/${resource}/${id}`);
        return response.data;
    }
}
