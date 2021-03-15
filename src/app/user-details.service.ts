import { Injectable } from '@angular/core';
import {detailedUserModel, userModel} from './user-model';
import {constants} from './assumptions';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }
  userList:any = [];

  pageSize: number = constants.pageSize;

  //returns all user for a page number
  getAllUsers(page){
    let end = page*this.pageSize,
        start = end - this.pageSize;
    this.userList.length = 0;
    for(let i=start; i<end; i++){
      let userIndex = i+1;
      let newUser = new userModel();
      newUser.userName = 'userName'+userIndex;
      newUser.profileUrl = '/userName'+userIndex;
      this.userList.push(newUser);
    }
    return this.userList;
  }

  //return total number of users, used to calculated the pages
  totalUsers(){
    return constants.totalUsers;
  }

  //returns user details for a particular user name  
  getUserDetails(userName){
    let userObject = new detailedUserModel();  
    this.userList.forEach(element => {
      if(element.userName === userName){
        userObject.userName = element.userName;
        userObject.profileUrl = element.profileUrl
        userObject.followers = 10;
        userObject.following = 100;
      }
    });
    return userObject;
  }
}
