import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import * as alertify from 'alertifyjs'
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
 registrationform:FormGroup;
 usersubmitted:boolean;

 user:User

  constructor(private fb:FormBuilder, private alertify:AlertifyService) { }

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
// costom type validation
  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password')?.value=== fg.get('confirmpassword')?.value ?true:{notmatched:true}
  }
// create form group
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
// save data on local storage
  onSubmit(){
    this.usersubmitted=true
    if(this.registrationform.valid){
    console.log(this.registrationform)
    this.user=Object.assign(this.user,this.registrationform.value);
   // this.adduser;
    localStorage.setItem('Users',JSON.stringify(this.user))// conver json into string
    this.registrationform.reset();
    this.usersubmitted=false;
    this.alertify.success("Congrats data has been saved succssfully")

  }else{
    this.alertify.Error('provide required details');
  }
  }



  /*adduser(user:any){


    let users = [];
    if (localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users')as string);// convert string into json
      users=[user,...users];
    } else {
      users=[user];
    }
   localStorage.setItem('Users',JSON.stringify(users))// conver json into string
  }*/

}
