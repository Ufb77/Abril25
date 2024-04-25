import { Component } from '@angular/core';
import { ProductoServicioService } from '../_servicio/producto-servicio.service';
import { Producto } from '../_modelo/Producto';
import { AddComponenteComponent } from '../add-componente/add-componente.component';
import { entorno } from '../_entorno/entorno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [AddComponenteComponent, FormsModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  productos: Producto[] = [];

  id: number = 0

  

  producto: Producto = {
    idProducto: 0,
    nombreProducto: '',
    precioUnitario: 0,
    unidadesStock: 0,
    categoria: 0
  };

  constructor(private servicio: ProductoServicioService){

  }

  ngOnInit(): void {
    
    this.servicio.obtenerTodos().subscribe(data=> this.productos = data)
    
  }

  recibirDatos(productoRecibido: Producto) {
    this.producto = productoRecibido
    
  }

  eliminar(id: number){
    console.log(this.id);
    this.servicio.eliminar(id).subscribe();
  }

  guardarBd(){
    
    this.servicio.insert(this.producto).subscribe();
    
  }

  mostrarBd(){
    this.servicio.obtenerTodos().subscribe(data=> this.productos = data)
  }
  

}
