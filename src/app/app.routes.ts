import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

import { Labs } from './pages/labs/labs'
import { TodoList } from './todo-list/todo-list';
import { Todo } from './pages/todo/todo';
export const routes: Routes = [
  {
    path: '',
    component: TodoList
  },
  {
    path: 'inicio',
    component: Home
  },
  {
    path: 'labs',
    component: Labs
  },
  {
    path: 'todo',
    component: Todo
  }
];

