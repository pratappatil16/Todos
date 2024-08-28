import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../todo.model';
import { selectTodos } from '../todo.selectors';
import { deleteTodo, updateTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-detail-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-detail-component.component.html',
  styleUrls: ['./todo-detail-component.component.css']
})
export class TodoDetailComponentComponent implements OnInit {
  todoId: string = '';  
  todo$: Observable<Todo | undefined> = of(undefined); // Initialize todo$ here
  todoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ todos: Todo[] }>,
    private fb: FormBuilder
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      duedate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.todoId = this.route.snapshot.paramMap.get('id') || '';
    
    this.todo$ = this.store.select(selectTodos).pipe(
      map(todos => todos.find(todo => todo.id === this.todoId))
    );

    this.todo$.subscribe(todo => {
      if (todo) {
        this.todoForm.patchValue(todo);
      }
    });


    console.log(this.todo$)
  }
  onDelete() {
    this.store.dispatch(deleteTodo({ id:this.todoId }));
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      const updatedTodo = { ...this.todoForm.value, id: this.todoId };
      this.store.dispatch(updateTodo({ todo: updatedTodo }));
      this.router.navigate(['/']);
    }
  }
}
