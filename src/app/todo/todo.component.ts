import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm }    from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.css']
})

export class TodoComponent implements OnInit {

  todos: any[] = [];

  constructor(){}
  ngOnInit(){}

  addTodo(){
    let newTodo = 'newTodo';
    this.todos.push(newTodo);
  }

  getAllTodos(): any[]{
    return this.todos;
  }

  removeTodo(todo: any){
    this.todos.splice(todo)
  }

}