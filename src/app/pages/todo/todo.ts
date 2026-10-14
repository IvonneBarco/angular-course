import { Component } from '@angular/core';
import { TodoItem } from '../../components/todo-item/todo-item';

@Component({
  imports: [TodoItem],
  selector: 'app-todo',
  styleUrl: './todo.scss',
  templateUrl: './todo.html',
})
export class Todo {}
