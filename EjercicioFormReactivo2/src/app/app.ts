import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  datos = '';

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });
  submit() {
    this.datos = `Nombre=${this.formularioContacto.value.nombre} Mail=${this.formularioContacto.value.mail} Mensaje=${this.formularioContacto.value.mensaje}`;
  }
}
