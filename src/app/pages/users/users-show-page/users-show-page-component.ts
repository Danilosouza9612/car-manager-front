import { Component } from '@angular/core';
import { BaseShowPageComponent } from '../../../shared/pages/base-show-page/base-show-page.component';
import { User } from '../../../../state/user/user';
import { ActivatedRoute } from '@angular/router';
import { UserBackendApiService } from '../../../../service/userBackendApiService';

@Component({
    selector: 'app-users-show-page',
    templateUrl: './users-show-page-component.html',
})
export class UsersShowPageComponent extends BaseShowPageComponent<User> {
    // Add any additional logic or properties specific to UsersShowPageComponent here
    constructor(override activatedRoute: ActivatedRoute){
        super(activatedRoute, UserBackendApiService);
    }

    get resource(): string{
        return 'users'
    }
}