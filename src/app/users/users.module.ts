import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UsersListComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'users', component: UsersListComponent },
      { path: 'users/create', component: UserCreateComponent }
    ])
  ]
})
export class UsersModule { }
