import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: string }>()
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: Todo }>()
);
