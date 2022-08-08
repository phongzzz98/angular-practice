import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../parent-comp/interface';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
})
export class ChildCompComponent implements OnInit {
  editDesc: string = ''
  @Output() editItemEvent = new EventEmitter<ITodo>();
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Input() todo: ITodo = {
    id: 0,
    description: 'TEST',
    time: 'Mon Aug 08 2022 11:35:06 GMT+0700 (Indochina Time)'
  }
  toggleEdit: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }

  toggleEditTodo() {
    this.toggleEdit = !this.toggleEdit
  }

  editTodo() {
    console.log("Edit Todo: ", this.editDesc)
    if (this.editDesc) {
      const currentTime = new Date;
      const newEdit: ITodo = {
        id: this.todo.id,
        description: this.editDesc,
        time: currentTime.toString(),
      }
      this.editItemEvent.emit(newEdit)
    }
  }

  deleteTodo(){
    this.deleteItemEvent.emit(this.todo.id)
  }


}
