import { Component } from '@angular/core';
import { iUser } from '../../../Models/i-user';
import { UsersService } from '../../../Services/users.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.scss',
})
export class UserpageComponent {
  allUsers: iUser[] = [];
  constructor(private authSvc: AuthService, private usersSvc: UsersService) {}

  ngOnInit() {
    this.usersSvc.getAll().subscribe((users) => {
      this.allUsers = users;
      console.log(this.allUsers);
    });
  }
}
