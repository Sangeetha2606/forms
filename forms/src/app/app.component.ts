import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  public age= 20;
  public contact:any;
  
 public onSubmit(contactForm:any){
   console.log(contactForm.value);
 }
 public countryList=[
   {
     id:1,name:"India"
   },
   {
     id:2,name:"Aus"
   },
   {
     id:3,name:"England"
   }
 ];
ngOnInit():void{
  this.contact={
    firstname:"sakshi",
    lastname:"sangee",
    email:"sakshi21@gmail.com",
    phonenumber:"1234567890",
    textarea:"Welcome to AlluGroups!"

  };
}



setValue(){
  this.contact={
    firstname:"ramyaa",
    lastname:"ramyaa",
    email:"ramya21@gmail.com",
    phonenumber:"1234569999",
    textarea:"Welcome to AngularClasses!"

  };
 }
}
