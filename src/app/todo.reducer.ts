import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo, updateTodo } from './todo.actions';
import { Todo } from './todo.model';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(updateTodo, (state, { todo }) => state.map(t => t.id === todo.id ? { ...t, ...todo } : t))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
