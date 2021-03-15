import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../user-details.service';
import { detailedUserModel} from '../user-model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userDetailsSvc: UserDetailsService) { }

  user:detailedUserModel;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value)=>{
      this.user = this.userDetailsSvc.getUserDetails(value.userName);
    })
  }

}
