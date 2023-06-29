import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
 registrationform:FormGroup

  constructor() { }

  ngOnInit() {
    this.registrationform= new FormGroup({
     userName:new FormControl(null,Validators.required),
     email:new FormControl(null,[Validators.required,Validators.email]),
     password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
     confirmpassword:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      mobile:new FormControl(null,Validators.required)
    } );
  }

  /*passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password')?.value=== fg.get('confirmpassword')?.value ?true:{notmatched:true}
  }*/

  get userName(){
    return this.registrationform.get('userName') as FormControl
  }

  get email(){
    return this.registrationform.get('email') as FormControl
  }

  onSubmit(){
    console.log(this.registrationform)
  }

}
