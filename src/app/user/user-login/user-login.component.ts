import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onLogin(loginForm:NgForm){
    console.log(loginForm);}
   /*const valid= this.authservice.authuser(loginForm.value)

   if(valid){
    console.log("login successfull");

   }
   else{console.log("login unsuccessfull")}
  }*/

}
