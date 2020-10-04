import { Component, OnInit } from '@angular/core';
import{User} from "../../../models/User";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  user:User;
  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem("UserData"));
  }

}
