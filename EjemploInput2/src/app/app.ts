import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dado } from './dado/dado';

@Component({
  selector: 'app-root',
  imports: [Dado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjemploInput2');

  valor1: number = this.retornarAleatorio()
  valor2: number = this.retornarAleatorio()
  resultado: string = "";
  retornarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }
  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    if (this.valor1 == this.valor2)
      this.resultado = 'Ganó';
    else
      this.resultado = 'Perdió';
  }

}
