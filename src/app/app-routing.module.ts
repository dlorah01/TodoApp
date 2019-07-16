import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoaddComponent } from './todoadd/todoadd.component';
import { TodoeditComponent } from './todoedit/todoedit.component';
import { TodogetComponent } from './todoget/todoget.component';

const routes: Routes = [
  {
    path: '',
    component: TodogetComponent
  },
	 {
    path: 'todo/create',
    component: TodoaddComponent
  },
  {
    path: 'todo/edit/:id',
    component: TodoeditComponent
  },
  {
    path: 'todo',
    component: TodogetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
