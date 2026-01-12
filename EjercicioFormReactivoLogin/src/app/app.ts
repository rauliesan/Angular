import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjercicioFormReactivoLogin');

  usuario: string = '';
  contrasenia: string = '';

  constructor() {
    let userStr = localStorage.getItem("user");
    if(userStr == null){
      return;
    }
    let user = JSON.parse(userStr);
    this.mostrarUser(user);
  }

  formularioContacto = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contrasenia: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  mostrarUser(user: {usuario: string, contrasenia: string}){
    
  }
}
