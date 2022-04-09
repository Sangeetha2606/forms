import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
  path:"",component:HomeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path:"contactus",component:ContactusComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"createaccount",component:CreateaccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
