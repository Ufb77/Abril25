import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../_modelo/Producto';
import { entorno } from '../_entorno/entorno';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {


  constructor(private direccion: HttpClient ) {

    
   }

   obtenerTodos():Observable<Producto[]>{
      return this.direccion.get<Producto[]>(entorno.HOST);
   }

   insert(p: Producto): Observable<Producto>{

    return this.direccion.post<Producto>(entorno.HOST, p);
   }

   eliminar(id: number){
    return this.direccion.delete(entorno.HOST + "/" +id);
   }
}
