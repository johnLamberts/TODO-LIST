import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  todos: Todo[] = [
    new Todo('Test one, I am here! Creatitng a simple task to do!', true),
    new Todo(`Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto
    repudiandae accusantium amet repellendus enim soluta rerum ipsa porro,
    dignissimos modi voluptatem quasi explicabo veniam dolores nihil
    maiores vitae neque.`)
  
  ]

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: number, updatedTodo: Todo) {
    this.todos[id] = updatedTodo;
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }
}
