
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AvatarComponent } from './avatar/avatar.component';

const routes: Routes = [
  
  {
    path: ':id', 
    component: UserDetailComponent  
  },
  {
  path: 'profile',
  component: ProfileComponent   // http://localhost:4200/users/profile
  },
  {
  path: 'avatar',
  component: AvatarComponent // http://localhost:4200/users/avatar
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
