import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { selectTodos } from './todo.selectors';
import { EditTodoModelComponent } from './edit-todo-model/edit-todo-model.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AddtodoComponent,
    CommonModule,
    EditTodoModelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
