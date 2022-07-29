import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();

  @ViewChild('editProp') editPropElRef: ElementRef<HTMLElement>;
  
  
  test: string = 'Default Value';
  
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.test = 'New Value'
    }, 2500);
  }

 

  onClicked() {
    this.todoClicked.emit();
  }

  onEdit() {
    this.editClicked.emit();
  }

  onDelete() {
    this.deleteClicked.emit()
  }
}
