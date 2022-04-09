import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

import { GamingRoutingModule } from './gaming-routing.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    
  ],
  imports: [
    CommonModule,
    GamingRoutingModule
  ]
})
export class GamingModule { }
