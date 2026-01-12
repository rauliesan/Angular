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

  user = {
    usuario: '',
    contrasenia: '',
  }

  constructor() {
    let userStr = localStorage.getItem("user");
    if(userStr == null){
      return;
    }
    let user = JSON.parse(userStr);
    this.mostrarUser(user);
  }

  formularioRegistro = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contrasenia: new FormControl('', [Validators.required, Validators.minLength(10)]),
    sesion: new FormControl(false)
  });

  mostrarUser(user: {usuario: string, contrasenia: string}){
    this.user = user;
  }

  registrarse(){
    if(this.formularioRegistro.valid){
      this.user = {
        usuario: this.formularioRegistro.value.usuario ?? '',
        contrasenia: this.formularioRegistro.value.contrasenia ?? ''
      }
      if(this.formularioRegistro.value.sesion){
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    }
  }
}
