import { Routes } from '@angular/router';
import { TodoDetailComponentComponent } from './todo-detail-component/todo-detail-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todo-detail/:id', component: TodoDetailComponentComponent },
];
