import { Component } from '@angular/core';
import { Task } from '../models/Task';
import { TodoForm } from '../todo-form/todo-form';

@Component({
  selector: 'app-todo-list',
  imports: [TodoForm],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  tareas: Task[] = [];

  agregarTarea(tarea: Task){
    tarea.id = this.tareas.length;
    this.tareas.push(tarea);
  }

  eliminarTarea(id: number){
    let posicion: number = this.tareas.findIndex(tarea => tarea.id == id);
    this.tareas.splice(posicion, 1);
  }

}
