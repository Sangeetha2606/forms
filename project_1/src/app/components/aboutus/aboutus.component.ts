import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

@Input() childmsg:any;
@Output() sendData=new EventEmitter<string>();

 public message2="this message is from child component";
   
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
