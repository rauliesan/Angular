import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Propagador } from './propagador/propagador';

@Component({
  selector: 'app-root',
  imports: [Propagador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjemploOutput1');

  procesaPropagar(mensaje: string) {
    console.log(mensaje);
  }
}
