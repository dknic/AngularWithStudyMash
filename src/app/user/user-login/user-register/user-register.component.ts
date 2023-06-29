import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
 registrationform:FormGroup;
 usersubmitted:boolean;

 user:User

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
   /* this.registrationform= new FormGroup({
     userName:new FormControl(null,Validators.required),
     email:new FormControl(null,[Validators.required,Validators.email]),
     password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
     confirmpassword:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      mobile:new FormControl(null,Validators.required)
    } );*/
    this.createUserRegistration();
  }

  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password')?.value=== fg.get('confirmpassword')?.value ?true:{notmatched:true}
  }

  createUserRegistration(){
    this.registrationform=this.fb.group({
      userName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmpassword:new FormControl(null,[Validators.required,Validators.minLength(8)]),
       mobile:new FormControl(null,Validators.required)
    },{Validators:this.passwordMatchingValidator})
  }

  /*userData(User){
    return this.user={
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }
  }*/
  get userName(){
    return this.registrationform.get('userName') as FormControl
  }

  get email(){
    return this.registrationform.get('email') as FormControl
  }
  get mobile(){
    return this.registrationform.get('mobile') as FormControl
  }
  get password(){
    return this.registrationform.get('password') as FormControl
  }

  onSubmit(){
    this.usersubmitted=true
    if(this.registrationform.valid){
    console.log(this.registrationform)
    this.user=Object.assign(this.user,this.registrationform.value);
    localStorage.setItem('Users',JSON.stringify(this.user))// conver json into string
    this.registrationform.reset();
    this.usersubmitted=false;
  }
  }

  

 /* adduser(user:User){

    let users=[];

    if (localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'));// convert string into json
      users=[user,...users];
    } else {
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(this.users))// conver json into string
  }*/

}
