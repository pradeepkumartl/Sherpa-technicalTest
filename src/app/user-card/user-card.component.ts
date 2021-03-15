import { Component, Input, OnInit } from '@angular/core';
import { userModel } from '../user-model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input("user")user: userModel;

  constructor() { }

  ngOnInit(){
  
  }
}
