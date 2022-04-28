import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    const fakeUsers = [
      {id: 1, firstName: "User 1", lastName: "Last name 1", email: "user1@xxx.com"},
      {id: 2, firstName: "User 2", lastName: "Last name 2", email: "user2@xxx.com"},
    ];
    this.users = fakeUsers;
  }

}
