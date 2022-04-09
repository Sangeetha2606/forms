import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public message ="This message is from home(parent) component";
  public welcomeMessage:string="";
  subscription: any;
  constructor(private service: DataServiceService){

  }
  ngOnInit():void{
       this.welcomeMessage =this.service.getMessage();
       this.subscription = this.service.currentMessage.subscribe((message: any) => this.welcomeMessage = message);
  }
  newMessage() {
    this.service.changeMessage("Hello,This message is from app component");
  }

}
