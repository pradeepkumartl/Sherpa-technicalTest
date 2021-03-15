import { Component, OnInit } from '@angular/core';
import {userModel} from '../user-model';
import {UserDetailsService} from '../user-details.service';
import {Router} from '@angular/router';
import {constants} from '../assumptions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'technicalTest';
  users:userModel[] = [];
  currentPage:number = 1;
  totalUsers: number = 0;
  totalPages: number = 0;

  constructor(private userService: UserDetailsService, private router: Router){

  }

  ngOnInit(){
    this.totalUsers = this.userService.totalUsers();
    this.totalPages = Math.ceil(this.totalUsers/constants.pageSize);
    this.getUsers(this.currentPage);
  }

  getUsers(page){
    this.currentPage = page;
    this.users = this.userService.getAllUsers(page);
  }

  openUserDetails(event, userName){
    if(!event.target.hasAttribute("href")){
      this.router.navigate(['userDetails',userName]);
    }
  }

}
