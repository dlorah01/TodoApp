import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {

  todoitem: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ts: TodoListService,
    private fb: FormBuilder) {

  		this.createForm();
     }


  createForm() {
    this.angForm = this.fb.group({
        todo_name: ['', Validators.required ],
        todo_description: ['', Validators.required ]
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ts.editItem(params['id']).subscribe(res => {
          this.todoitem = res;
      });
    });
  }

  updateItem(todo_name, todo_description) {
   this.route.params.subscribe(params => {
      this.ts.updateItem(todo_name, todo_description, params['id']);
      this.router.navigate(['todo']);
});
}

}
