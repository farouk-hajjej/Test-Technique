import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from '../entity/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
url='http://localhost:3000/listUsers'
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<User[]>(this.url);
  }
  AddUser(user: User):Observable<User>{
   return this.http.post<User>(this.url,user);
  }


  /** Supprime un utilisateur de la liste */
  deleteUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.delete<User>(url);
  }
}
