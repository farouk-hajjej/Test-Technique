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
  constructor(private apiUsersService:ApiUsersService){}
  ngOnInit(): void {


  }


  LoadListUsersFromJson(){
    this.apiUsersService.getUsers().subscribe((data: User[])=> this.listUsers =data) ;
  }



  SaveListUsersInJson(){}

}
