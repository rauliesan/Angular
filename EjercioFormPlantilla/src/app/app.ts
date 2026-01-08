import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjercioFormPlantilla');

  art = {
    codigo: 0,
    descripcion: "",
    precio: 0
  }

  articulos = [
    {codigo: 1, descripcion: 'papas', precio: 10.55},
    {codigo: 2, descripcion: 'manzanas', precio: 12.10},
    {codigo: 3, descripcion: 'melon', precio: 52.30},
    {codigo: 4, descripcion: 'cebollas', precio: 17},
    {codigo: 5, descripcion: 'calabaza', precio: 20}
  ]

  borrar(codigo: number){
    
  }

  seleccionar(codigo: number){
    alert('a');
    let articuloArray = this.articulos.filter(articulo => articulo.codigo == codigo);
    let articulo = articuloArray[0];
    this.art.codigo = articulo.codigo;
    this.art.descripcion = articulo.descripcion;
    this.art.precio = articulo.precio;
  }


}
