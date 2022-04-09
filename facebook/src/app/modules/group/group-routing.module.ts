import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Group1Component } from './components/group1/group1.component';
import { Group2Component } from './components/group2/group2.component';

import { GroupsComponent } from './components/groups/groups.component';


const routes: Routes = [
  {
    path:"",component:GroupsComponent
  },
  
  {
    path:"groups",component:GroupsComponent
  },
  {
    path:"group1",component:Group1Component
  },
  {
    path:"group2",component:Group2Component
  }
  
   
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
