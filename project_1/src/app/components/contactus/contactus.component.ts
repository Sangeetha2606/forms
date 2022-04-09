import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public contactForm:any;
  onSubmit() {
    console.log(this.contactForm.value);
  }
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      
    })
  }

}
