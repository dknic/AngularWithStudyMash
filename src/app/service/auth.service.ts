import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
authuser(user:User){
  let uservalue=[];
  if(localStorage.getItem('Users')){
    uservalue=JSON.parse((localStorage.getItem('Users')as string))

  }
  //return uservalue.find(p=>p.userName===user.userName && p.password===user.password)
}
}
