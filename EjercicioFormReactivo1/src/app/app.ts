import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule,],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  actividad = new FormControl();
  lista: string[];
  constructor() {
    this.lista = [];
    let datos = localStorage.getItem("actividades");
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null)
        for (let actividad of arreglo)
          this.lista.push(actividad);
    }
  }
  agregar() {
    this.lista.push(this.actividad.value);
    localStorage.setItem('actividades', JSON.stringify(this.lista));
    this.actividad.setValue('');
  }
  borrar(pos: number) {
    this.lista.splice(pos, 1);
    localStorage.clear();
    localStorage.setItem('actividades', JSON.stringify(this.lista));
  }
  borrarTodas() {
    localStorage.clear();
    this.lista = [];
  }
}