import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  result = '';

  ngOnInit(): void {
    const fakeUsers = [
      {id: 1, firstName: "User 1", lastName: "Last name 1", email: "user1@xxx.com", score: 1},
      {id: 2, firstName: "User 2", lastName: "Last name 2", email: "user2@xxx.com", score: 5},
    ];
    this.users = fakeUsers;
  }

  onClickedFromRating(event: string): void {
    console.log('Received data from rating= ' + event);
    this.result = 'Received data from rating= ' + event;
  }

}
