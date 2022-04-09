import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './components/friends/friends.component';
import { GroupsComponent } from './components/groups/groups.component';

import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
 
  {
    path:"",component:ProfileComponent
  },
  {
    path:"home/profile",component:ProfileComponent
  },
  {
    path:"home/groups",component:GroupsComponent
  },
  {
    path:"home/friends",component:FriendsComponent
  }
  
  
  
   
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
