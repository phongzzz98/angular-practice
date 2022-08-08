import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../parent-comp/interface';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {
  @Input() todoList: ITodo[] = []
  @Output() newItemEvent = new EventEmitter<ITodo>();
  description: string = ''

  newTodo: ITodo = {
    id: 0,
    description: this.description,
    time: 'Mon Aug 08 2022 11:35:06 GMT+0700 (Indochina Time)',
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleClear() {
    this.description = '';
  }

  addTodo() {
    console.log("Add Todo: ", this.description)
    if (this.description) {
      const currentTime = new Date;
      const newAdd = this.newTodo = {
        id: this.todoList.length + 1,
        description: this.description,
        time: currentTime.toString()
      }
      this.newItemEvent.emit(newAdd)
    }
  }

}
