import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamingModule } from './modules/gaming/gaming.module';
import { GroupModule } from './modules/group/group.module';
import { HomeModule } from './modules/home/home.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { VideoModule } from './modules/video/video.module';

const routes: Routes = [
  {
    path:"home", loadChildren:() => HomeModule
  },
  {
    path:"video", loadChildren:() => VideoModule
  },
  {
    path:"marketplace", loadChildren:() => MarketplaceModule
  },
  {
    path:'gaming', loadChildren:() => GamingModule
  },
  {
    path:"group", loadChildren:() => GroupModule
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
