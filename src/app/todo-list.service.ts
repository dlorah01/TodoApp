import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

	uri = 'http://localhost:4000/todo';
  constructor(private http: HttpClient) { }

  addItem(todo_name, todo_description) {
    const obj = {
      todo_name: todo_name,
      todo_description: todo_description
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getItems() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editItem(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }


 updateItem(todo_name, todo_description, id) {

    const obj = {
        todo_name: todo_name,
        todo_description: todo_description
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteItem(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
