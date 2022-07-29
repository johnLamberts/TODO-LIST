import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskDataService } from '../shared/task-data.service';
import { Todo } from '../shared/todo.model';
import { MatDialog } from '@angular/material/dialog';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[];
  error = false;

  private subscription: Subscription;

  constructor(private taskData: TaskDataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.taskData.getTodos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    console.log('Form submitted');
    console.log(form);

    if (form.invalid) {
      return (this.error = true);
    } else {
    }
    this.taskData.addTodo(new Todo(form.value.text));

    this.error = false;
    form.reset();
  }

  setCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  setEdit(todo: Todo) {
    const id = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(TodoEditComponent, {
      width: '700px',
      data: todo,
    });

    this.subscription = dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskData.updateTodo(id, result);
      }
    });
  }

  deleteTodo(todo: Todo) {
    const id = this.todos.indexOf(todo);
    this.taskData.deleteTodo(id);
  }
}
