import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  articulos :any;

  constructor(private articulosServicio: ArticulosService) {
    this.articulos=this.articulosServicio.retornar();
  }
}
