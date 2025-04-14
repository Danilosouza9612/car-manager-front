import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { endpoint, baseResourcePath} from './backendEntryPoint'

const baseHeader = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
}


export class BackendApiService{
    private axiosInstance: AxiosInstance;

    constructor(resource: string){
        this.axiosInstance = axios.create({
            baseURL: `${endpoint}${baseResourcePath}${resource}`,
        })
    }

    async list(config?: any){
        let response = await this.axiosInstance.get('', { headers: baseHeader});
        return response.data;
    }

    async get(id:number, config?: any){
        let response:AxiosResponse = await this.axiosInstance.get(`/${id}`, config);
        return response.data;
    }

    async create(data: any, config?: any){
        let response = await this.axiosInstance.post('', data, config);
        return response.data;
    }

    async update(id:number, data: any, config?: any){
        let response = await this.axiosInstance.put(`/${id}`, data, config);
        return response.data;
    }

    async delete(id: number){
        let response = await this.axiosInstance.delete(`/${id}`);
        return response.data;
    }

    private handleError(err: any){
        console.log("err");
        console.log(err.response.data);
    }
}
