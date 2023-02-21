import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[] = [];
  

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/')
      .subscribe(todos => { this.todos = todos; });
  }

 
  

}
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


