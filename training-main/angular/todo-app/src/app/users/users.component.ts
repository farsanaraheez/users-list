import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  users: User[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => { this.users = users; });
  }

}
export interface User{
  id:number;
  name:string;
  username:string;
  email:string;
  address:string;
  phone:number;
  website:string;
  company:string;
}


