import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = '<h4>HEADER NAVIGATION<b>(One-Way Data Binding)</b></h4>';
  title2='<h4><b>Two-Way Data Binding</b></h4>';
  public name:string="sun";
  public showElement:boolean=true;
   public colorText: string ="red"; 

  public getValue(ele: any){
    console.log(ele.target.value);
  }
  public subscription: Subscription | undefined;
 public welcomeMessage:string="";
  constructor(private service: DataServiceService){

  }

  ngOnInit(){
       this.welcomeMessage =this.service.getMessage();
       this.subscription = this.service.currentMessage.subscribe((message: any) => this.welcomeMessage = message);
  }
newMessage() {
  this.service.changeMessage("Hello,This message is from app component")
}
 changeColor(color: string){
   this.colorText =color;
 }
}
