import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-componente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-componente.component.html',
  styleUrl: './add-componente.component.css'
})
export class AddComponenteComponent {

  @Output()
  producto: EventEmitter<Producto> = new EventEmitter;

  p: Producto = {
    idProducto: 0,
    nombreProducto: '',
    precioUnitario: 0,
    unidadesStock: 0,
    categoria: 0
  };

  idProducto:number = 0;
  nombreProducto: string= '';
  precioUnitario: number = 0;
  unidadesStock: number = 0;
  categoria: number = 0;


  obtenerDatos() {

    this.p.idProducto = this.idProducto;
    this.p.nombreProducto = this.nombreProducto;
    this.p.precioUnitario = this.precioUnitario;
    this.p.unidadesStock = this.unidadesStock;
    this.p.categoria = this.categoria;

    
    

   this.producto.emit(this.p);
  }
}
