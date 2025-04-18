import { Component } from '@angular/core';
import { BaseShowPageComponent } from '../../../shared/pages/base-show-page/base-show-page.component';
import { User, UserResponse } from '../../../../state/user/user';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserBackendApiService } from '../../../../service/userBackendApiService';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-users-show-page',
    templateUrl: './users-show-page-component.html',
    imports: [RouterLink, CommonModule]
})
export class UsersShowPageComponent extends BaseShowPageComponent<UserResponse> {
    // Add any additional logic or properties specific to UsersShowPageComponent here
    constructor(override activatedRoute: ActivatedRoute){
        super(activatedRoute, UserBackendApiService);
    }

    get resource(): string{
        return 'users'
    }
}