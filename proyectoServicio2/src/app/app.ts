import { Component, inject, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosService } from './productos';
import { FormsModule } from '@angular/forms';
import { productoDTO } from './productos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

  private productoService = inject(ProductosService);

  productos = signal<productoDTO[]>([]);

  producto={
    id:0,
    codigo:"",
    producto:"",
    precio:0,
    cantidad:0
  }

  constructor() {
     effect(() => {
      this.recuperarTodos();
    });
  }

  recuperarTodos() {
    this.productoService.recuperarTodos().subscribe({
      next: data => {
        this.productos.set(data);
      },
      error: err => {
        console.error('Error cargando productos', err);
      }
    });
  }

 crearProducto() {
    this.productoService.crearProducto(this.producto).subscribe( {
      next: data => {
      if (data == 'Ok') {
          alert("Producto creado correctamente");
          this.recuperarTodos();
        }
      },
      error: err => {
        console.error('Error registrando productos', err);
      }
    });
  }

  eliminarProducto(id:number) {
    this.productoService.eliminarProducto(id).subscribe( {
      next: (data) => {  
         if (data == 'Ok') {
            alert("Producto eliminado correctamente");
            this.recuperarTodos();
        }
      },
      error: err => {
        console.error('Error eliminado productos', err);
      }
    });
  }

  modificarProducto(id:number) {
    this.productoService.modificarProducto(this.producto, id).subscribe({
       next: (data) => {  
         if (data == 'Ok') {
            alert("Producto modificado correctamente");
            this.recuperarTodos();
        }
      },
      error: err => {
        console.error('Error al modificar productos', err);
      }
    });
  }
}