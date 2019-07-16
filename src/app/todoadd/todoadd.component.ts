import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.css']
})
export class TodoaddComponent implements OnInit {

	angForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private ts: TodoListService) {
  	this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      todo_name: ['', Validators.required ],
      todo_description: ['', Validators.required ]
    });
  }

  addItem(todo_name, todo_description) {
    this.ts.addItem(todo_name, todo_description);
    this.router.navigate(['todo']);
  }


  ngOnInit() {
  }

}
