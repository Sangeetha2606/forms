import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamingModule } from './modules/gaming/gaming.module';
import { GroupModule } from './modules/group/group.module';
import { HomeModule } from './modules/home/home.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { VideoModule } from './modules/video/video.module';


@NgModule({
  declarations: [
    AppComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    VideoModule,
    MarketplaceModule,
    GamingModule,
    GroupModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
