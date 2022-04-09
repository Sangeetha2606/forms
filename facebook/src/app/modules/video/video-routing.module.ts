import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveComponent } from './components/live/live.component';
import { SavedvideosComponent } from './components/savedvideos/savedvideos.component';
import { ShowsComponent } from './components/shows/shows.component';

const routes: Routes = [
  {
    path:"",component:LiveComponent
  },
  {
    path:"live",component:LiveComponent
  },
  {
    path:"shows",component:ShowsComponent
  },
  {
    path:"savedvideos",component:SavedvideosComponent
  }
  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
