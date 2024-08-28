import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from './todo.model';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const selectCompletedTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos
);
