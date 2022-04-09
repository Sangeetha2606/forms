import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';

import { GroupsComponent } from './components/groups/groups.component';
import { Group1Component } from './components/group1/group1.component';
import { Group2Component } from './components/group2/group2.component';



@NgModule({
  declarations: [
   
    GroupsComponent,
    Group1Component,
    Group2Component
  ],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
