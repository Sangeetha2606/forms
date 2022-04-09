import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Input() childMessage: any;

   @Input() newdata:any;//example for parenttochild 
   public childMsg="This message is from child component";
   public message="This message is from child component via output() and eventemitter";
   @Output() messageEvent= new EventEmitter<string>();
  
  constructor() { }
   

  ngOnInit(): void {
    
  }
  sendMessage(){
    this.messageEvent.emit(this.message)
  }

}
