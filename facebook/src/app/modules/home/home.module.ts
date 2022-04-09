import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './components/friends/friends.component';
import { GroupsComponent } from './components/groups/groups.component';

import { HomeRoutingModule } from './home-routing.module';

import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    FriendsComponent,
    GroupsComponent,
    
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
