import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
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
    this.articulos = this.articulos.filter(articulo => articulo.codigo != codigo);
  }

  seleccionar(codigo: number){
    let articulo = this.articulos.find(articulo => articulo.codigo == codigo);
    if(articulo){
      this.art.codigo = articulo.codigo;
      this.art.descripcion = articulo.descripcion;
      this.art.precio = articulo.precio;
    }
  }
  
  agregar(){
    if(!this.articulos.find(articulo => articulo.codigo == this.art.codigo)){
      this.articulos.push(this.art);
    } else{
      alert('Error, no se puede agregar el artículo porque ya existe uno con el mismo código.');
    }
    this.art = {
        codigo: 0,
        descripcion: "",
        precio: 0
    }
  }

  modificar(){
    let posicion = this.articulos.findIndex(articulo => articulo.codigo == this.art.codigo);
    if(posicion != -1){
      this.articulos[posicion] = this.art;
    } else{
      alert('Error id es diferente al producto que se quiere modificar. \nNo se realizará la modificación');
    }
    this.art = {
        codigo: 0,
        descripcion: "",
        precio: 0
    }
  }

}