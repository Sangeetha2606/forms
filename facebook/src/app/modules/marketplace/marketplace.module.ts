import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { BuyingComponent } from './components/buying/buying.component';
import { SellingComponent } from './components/selling/selling.component';
import { MarketplaceRoutingModule } from './marketplace-routing.module';



@NgModule({
  declarations: [
    NotificationsComponent,
    BuyingComponent,
    SellingComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
