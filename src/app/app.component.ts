import {Component, OnInit} from '@angular/core';
import {User} from './entity/User';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiUsersService} from './services/api-users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-technique';
  listUsers:User[]=[];
  u:User;

  constructor(private apiUsersService:ApiUsersService){}
  ngOnInit(): void {


  }


  LoadListUsersFromJson(){
    this.u=new User();
    this.apiUsersService.getUsers().subscribe((data: User[])=> this.listUsers =data) ;
  }
/*
  SaveListUsersInJson() {
    this.apiUsersService.AddUser(this.u).subscribe(  data => {
      this.getListUsers();
    });

  }

*/


}
