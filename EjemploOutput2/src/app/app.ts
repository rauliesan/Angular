import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CronometroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjemploOutput2');

  mensaje = "";

  actualizar(t: number){
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
