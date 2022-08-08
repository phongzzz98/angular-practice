import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';
import { ITodo } from './interface';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.scss']
})
export class ParentCompComponent implements OnInit {
  toggleInput: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggleInput = !this.toggleInput
  }

  addNewTodo(newTodo: ITodo) {
    this.todoList.push(newTodo)
    console.log(this.todoList)
  }

  editTodo(editedTodo: ITodo) {
    this.todoList = this.todoList.map((todo) => todo.id !== editedTodo.id ? todo : editedTodo)
    console.log('Edit', editedTodo)
    console.log("After Edit: ", this.todoList)
  }

  deleteTodo(deleteTodoId: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== deleteTodoId)
  }

  todoList: ITodo[] = [
    {
      id: 1,
      description: 'Todo1',
      time: 'Mon Aug 08 2022 11:35:06 GMT+0700 (Indochina Time)'
    },
    {
      id: 2,
      description: 'Todo2',
      time: 'Tue Aug 08 2022 11:36:06 GMT+0700 (Indochina Time)'
    },
    {
      id: 3,
      description: 'Todo3',
      time: 'Wed Aug 08 2022 11:37:06 GMT+0700 (Indochina Time)'
    },
    {
      id: 4,
      description: 'Todo4',
      time: 'Thu Aug 08 2022 11:38:06 GMT+0700 (Indochina Time)'
    },
    {
      id: 5,
      description: 'Todo5',
      time: 'Fri Aug 08 2022 11:39:06 GMT+0700 (Indochina Time)'
    },
  ]
  
}
