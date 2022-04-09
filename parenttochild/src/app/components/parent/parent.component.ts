import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
    public message1="Message from Parent Component";
    public msgFromChild: any;
    @ViewChild(ChildComponent) child: any;
  message: any;
    receiveMessage($Event: any){
      this.message=$Event
    }
      constructor() { }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() =>{
      this.msgFromChild = this.child.childMsg;
    },1);
    
  }

}
