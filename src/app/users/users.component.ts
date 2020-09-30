import { Component, OnInit } from '@angular/core';
import { GetUserListService } from '../get-user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userList: Array<any>;
  constructor(private getUserList: GetUserListService) {}

  ngOnInit(): void {
    this.getUserList.getUsers().subscribe((users) => {
      this.userList = users;
    });
  }
}
