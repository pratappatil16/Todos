import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { FilterByStatusPipe } from './filter-by-status.pipe';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(),provideStore({ todos: todoReducer }),FilterByStatusPipe]
};
