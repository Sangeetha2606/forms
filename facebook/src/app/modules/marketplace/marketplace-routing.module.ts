import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { BuyingComponent } from './components/buying/buying.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SellingComponent } from './components/selling/selling.component';



const routes: Routes = [
 
  {
    path:"",component:NotificationsComponent
  },
  {
    path:"notifications",component:NotificationsComponent
  },
  {
    path:"buying",component:BuyingComponent
  },
  {
    path:"selling",component:SellingComponent
  }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MarketplaceRoutingModule { }
