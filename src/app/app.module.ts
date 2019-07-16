import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoaddComponent } from './todoadd/todoadd.component';
import { TodogetComponent } from './todoget/todoget.component';
import { TodoeditComponent } from './todoedit/todoedit.component';

import {TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoaddComponent,
    TodogetComponent,
    TodoeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
