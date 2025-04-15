import { Component } from '@angular/core';
import { BaseShowPageComponent } from '../../../shared/pages/base-show-page/base-show-page.component';
import { User } from '../../../../state/user/user';

@Component({
    selector: 'app-users-show-page',
    templateUrl: './users-show-page-component.html',
})
export class UsersShowPageComponent extends BaseShowPageComponent<User> {
    // Add any additional logic or properties specific to UsersShowPageComponent here
    get resource(): string{
        return 'users'
    }
}