export interface BackendApiService {
    list(params?: any, header?: any): any;  
    get(id: number, header?: any): any;
    create(data: any, header?: any): any;
    update(id: number, data: any, header?: any): any;
    delete(id: number): any;
}

export interface AvatarBackendApiService{
    uploadPhoto(id: number, file: File, header?: any): Promise<any>;
}