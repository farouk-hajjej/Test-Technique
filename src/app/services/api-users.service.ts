import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from '../entity/User';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<User[]>('http://localhost:3000/listUsers');
  }
}
