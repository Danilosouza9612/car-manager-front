import { Inject, Injectable } from "@angular/core";
import { SessionStore } from "../state/sessionStore";
import { AuthenticatedBackendApiService } from "./backendEntryPoint";

@Injectable({
    providedIn: 'root'
})
export class MeBackendApiService extends AuthenticatedBackendApiService{

    constructor(override sessionStore: SessionStore){
        super(sessionStore);
        this.resource = "me";
    }

    async get(header?: any) {
        let response = await this.axiosInstance.get(`/${this.resource}`, { headers: {...this.requestBaseHeader, header}});
        return response.data;
    }
}