import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propagador',
  imports: [FormsModule],
  templateUrl: './propagador.html',
  styleUrl: './propagador.css',
})
export class Propagador {
  mensaje: string = "Mensaje propagado";

  @Output() propagar = new EventEmitter<string>();

  onPropagar() {
    this.propagar.emit(this.mensaje);
  }

}