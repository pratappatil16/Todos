import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Ensure map is imported
import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import { Router, RouterOutlet } from '@angular/router';
import { selectTodos } from '../todo.selectors';
import { AddtodoComponent } from '../addtodo/addtodo.component';
import { CommonModule } from '@angular/common';
import { EditTodoModelComponent } from '../edit-todo-model/edit-todo-model.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    AddtodoComponent,
    CommonModule,
    EditTodoModelComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  alltodos$: Observable<Todo[]>;
  todos$: Observable<Todo[]> | undefined;
  inProgressTodos$: Observable<Todo[]> | undefined; // Initialize to undefined
  complete$: Observable<Todo[]> | undefined; // Initialize to undefined

  isModalVisible = false;
  iseditModalVisible = false;
  currOpenTodo: Todo | null = null;

  constructor(private store: Store<{ todos: Todo[] }>, private router: Router) {
    this.alltodos$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {
    this.todos$ = this.alltodos$.pipe(
      map(todos => todos.filter(todo => todo.status === 'todo'))
    );
    this.inProgressTodos$ = this.alltodos$.pipe(
      map(todos => todos.filter(todo => todo.status === 'in-progress'))
    );

    this.complete$ = this.alltodos$.pipe(
      map(todos => todos.filter(todo => todo.status === 'complete'))
    );
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  openEditModel(todo: Todo) {
    this.iseditModalVisible = true;
    this.currOpenTodo = todo;
  }

  closeEditModel() {
    this.iseditModalVisible = false;
    this.currOpenTodo = null;
  }

  navigateToDetail(todoId: string) {
    this.router.navigate(['/todo-detail', todoId]);
  }
}
