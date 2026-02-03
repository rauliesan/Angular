import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {

  @Input() maxCaracteres: number = 50;
  @Output() tareaCreada = new EventEmitter<Task>();

  titulo: string = "";

  crearTarea(){
    if(!this.titulo.trim()){
      alert("Error, escribe una tarea antes de añadirla.");
      return;
    }
    let tarea = new Task(0, this.titulo);
    this.tareaCreada.emit(tarea);
    this.titulo = "";
  }

}
