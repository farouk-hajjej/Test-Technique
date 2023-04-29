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
  message: string;
  popoverTitle = 'Popover title';
  popoverMessage = 'Popover description';
  confirmClicked = false;
  cancelClicked = false;
  @Input() u: User=new User();
  ngOnInit(): void {
    this.getListUsers();
  }


  SaveListUsersInJson() {
    this.apiUsersService.AddUser(this.u).subscribe(
      data => {
        this.getListUsers();
      });
  }

   getListUsers() {
     this.apiUsersService.getUsers().subscribe(
       (data: User[]) => {
         this.listUsers = data;
       });

     return this.listUsers;

  }

  /** Supprime un utilisateur de la liste */
  deleteUser(id: number): void {
    this.apiUsersService.deleteUser(id)
      .subscribe(() => {
        this.getListUsers(); // Met à jour la liste des utilisateurs après la suppression
      });
  }

}
