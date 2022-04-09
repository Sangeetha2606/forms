
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public number1:number=30;
 public date=new Date();
 public number:number =11.2;
public age: any;
public text: string="Custom pipes";
public slice=['1','2','3','4','5'];
public digit=30 ;
  public ageCheck: boolean = true;
  public userList: any =[
    {
      fname:"san",
      lname:"u",
      age:7
    },
    {
      fname:"san",
      lname:"u",
      age:2
    },
    {
      fname:"san",
      lname:"u",
      age:2
    },
  ]
  public users: any =[
    {
      fname:"san",
      lname:"u",
      age:27
    },
    {
      fname:"san",
      lname:"u",
      age:22
    },
    {
      fname:"san",
      lname:"u",
      age:23
    }
  ]
  
  

  
  title = 'attributes';
}

