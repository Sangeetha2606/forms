import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './components/live/live.component';
import { ShowsComponent } from './components/shows/shows.component';
import { SavedvideosComponent } from './components/savedvideos/savedvideos.component';
import { VideoRoutingModule } from './video-routing.module';



@NgModule({
  declarations: [
    LiveComponent,
    ShowsComponent,
    SavedvideosComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
