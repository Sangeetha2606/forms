import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parenttochild';
  public name:string="sun";
  public getValue(){
    console.log(this.name);
  }
  
public data="";
data1="sakshi";
transformData(){
  this.data=this.data1;
  console.log(this.data);
} /* example for parenttochild */
  
}
