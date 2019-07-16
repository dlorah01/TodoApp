import { Component, OnInit } from '@angular/core';
import TodoItem from '../TodoItem';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todoget',
  templateUrl: './todoget.component.html',
  styleUrls: ['./todoget.component.css']
})
export class TodogetComponent implements OnInit {

	todoitems: TodoItem[];

  constructor(private ts: TodoListService) { console.log("se llama");}

  ngOnInit() {
  	 this.ts
      .getItems()
      .subscribe((data: TodoItem[]) => {
        this.todoitems = data;
    });
  }

  deleteItem(id) {
    this.ts.deleteItem(id).subscribe(res => {
      console.log('Deleted');
      this.ts
      .getItems()
      .subscribe((data: TodoItem[]) => {
        this.todoitems = data;
    });
    });
  }

}
