import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
/*adduser(user){

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
