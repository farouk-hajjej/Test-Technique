import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from '../entity/User';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
url='http://localhost:3000/listUsers/'
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<User[]>(this.url);
  }
  AddUser(user: User){
   return this.http.post(this.url,user);
  }
}
