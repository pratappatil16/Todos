import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-edit-todo-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-todo-model.component.html',
  styleUrls: ['./edit-todo-model.component.css']
})
export class EditTodoModelComponent implements OnInit {
  @Input() isVisible = false;
  @Input() todo: null | Todo = null;
  @Output() close = new EventEmitter<void>();

  ngOnInit() {
    console.log("hi ", this.todo);
  }

  closeModal() {
    console.log("close");
    this.close.emit();
  }
}
