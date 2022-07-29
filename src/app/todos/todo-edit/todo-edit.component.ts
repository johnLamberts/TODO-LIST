import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TodoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
    ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    if(form.invalid) return;

    const updatedTdo = {
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updatedTdo);
  }

}
