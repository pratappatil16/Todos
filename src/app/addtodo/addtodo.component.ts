import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import { selectTodos } from '../todo.selectors';
import { addTodo } from '../todo.actions';

@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css',
})
export class AddtodoComponent {
  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();

  todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = this.store.select(selectTodos);
  }

  addTodo(todo: Todo) {
    this.store.dispatch(addTodo({ todo }));
  }
  closeModal() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.closeModal();
    }
  }

  onSubmit(form: any) {
    console.log('Form submitted:', form.value);

    if (form.valid) {
      console.log('Form submitted:', form.value);
      const newtodo: Todo = {
        id: Math.random().toString(36).substring(7),
        title: form.value.title,
        status: form.value.status,
        description: form.value.description,
        priority: form.value.priority,
        duedate: form.value.dueDate,
      };
      console.log("debug ", newtodo)
      this.addTodo(newtodo);

      this.todos$.subscribe((todos) => {
        console.log('Todos:', todos);
      });
      
      this.closeModal();
    }
  }
}
