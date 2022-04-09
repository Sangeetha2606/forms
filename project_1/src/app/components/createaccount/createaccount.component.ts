import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({ 
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  public contactForm: any;
  get lastname() {
    return this.contactForm.get('lastname');
  } 
  get password(){
    return this.contactForm.get('password');
  }
  get confirmpassword(){
    return this.contactForm.get('confirmpassword');
  }
  
 public  onSubmit(){
    console.log(this.contactForm.value);
  }
  constructor() { }

  ngOnInit(): void {
    this.contactForm= new FormGroup({
        firstname: new FormControl("",[Validators.required,Validators.minLength(6)]),
        lastname: new FormControl("",[Validators.required,Validators.minLength(6)]),
        password: new FormControl("",[Validators.required]),
        confirmpassword: new FormControl("",[Validators.required]),
        phonenumber: new FormControl("",[Validators.required]),
        age: new FormControl("",[Validators.required]),
        isAdmin: new FormControl(),


  
      })
}
submit(form:any){
  console.log(form)
  localStorage.setItem('form',form.value)
}

}




