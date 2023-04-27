import {Component, Input, OnInit} from '@angular/core';
import {User} from '../entity/User';
import {ApiUsersService} from '../services/api-users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(private apiUsersService:ApiUsersService) { }
  listUsers:User[]=[];
  u: User;
  ngOnInit(): void {
    this.getListUsers();
  }


  SaveListUsersInJson() {
    this.apiUsersService.AddUser(this.u).subscribe(()=>this.listUsers = [this.u, ...this.listUsers]);
  }

   getListUsers() {
     this.apiUsersService.getUsers().subscribe(
       (data: User[]) => {
         this.listUsers = data;
       });

     return this.listUsers;

  }
}
