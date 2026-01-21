import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface productoDTO {
  id: number;
  codigo: number;
  producto: string;
  precio: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  
  url = 'http://localhost:9999/';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Observable<productoDTO[]> {
    return this.http.get<productoDTO[]>(`${this.url}buscarTodosLosProductos`);
  }


  crearProducto(producto:any): Observable<string> {
    return this.http.post(`${this.url}crearProducto`, producto, { 
      responseType: 'text' });    
  }

  eliminarProducto(id:number): Observable<string> {
    return this.http.delete(`${this.url}eliminarProducto?id=${id}`,{responseType: 'text' }); 
  }


  modificarProducto(producto:any, id:number): Observable<string> {
    return this.http.put(`${this.url}actualizarProducto?id=${id}`, producto,{responseType: 'text' });    
  } 

}







 

  /*getEmpresaPorNombreUsuario(nombreUsuario: string): Observable<perfilEmpresa> {
    return this.http.get<perfilEmpresa>(`${this.apiUrl}/buscarEmpresaPorNombreUsuario/${nombreUsuario}`, { headers: this.getHeaders() });
  }

  actualizarEmpresa(idEmpresa: number, datos: Partial<perfilEmpresa>): Observable<perfilEmpresa> {
    return this.http.put<perfilEmpresa>(`${this.apiUrl}/actualizarEmpresa/${idEmpresa}`, datos, { headers: this.getHeaders() });
  }

  

  actualizarEstado(idPostulacion: number, estado: 'CONTRATADO' | 'RECHAZADO'): Observable<any> {
    return this.http.put(`${this.postulacionURL}/candidatos/estado/${idPostulacion}?estado=${estado}`, {}, { headers: this.getHeaders() });
  }

  listarOfertasConPostulantes(): Observable<OfertaDTO[]> {
    return this.http.get<OfertaDTO[]>(
      `${this.ofertaUrl}/ofertasConPostulaciones`,
      { headers: this.getHeaders() }
    );
  }
}*/
