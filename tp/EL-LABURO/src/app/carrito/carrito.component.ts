import { Component, OnInit } from '@angular/core';
import { aja } from '../model/aja.model';
import { CarritoService } from '../servicio/carrito.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carrito',
  imports: [FormsModule,CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent  implements OnInit{
  productosEnCarrito:{producto:aja;cantidad:number}[]=[]

  constructor(private carritoService: CarritoService, private router:Router){}
  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos)=>{
      this.productosEnCarrito=productos
    })
  }
  agregarCantidad(index:number){
    this.productosEnCarrito[index].cantidad++
    }
    quitarCantidad(index:number){
      if(this.productosEnCarrito[index].cantidad>1){
        this.productosEnCarrito[index].cantidad--;
      }
    }
    eliminarProducto(productoId:number){
      this.carritoService.eliminarDelCarrito(productoId)
    }
    vaciarCarrito(){
      this.carritoService.vaciarCarrito()
    }
    /*realizarCompra(){
      alert('compra realizada')
      this.vaciarCarrito()
    }*/
   //navega al formulario de compra
   irAformularioCompra(){
    // redirige al usuario a la ruta de '/compra' donde se encuentra el formulario para realizar la compra
    this.router.navigate(['/compra'])
   }
   //calcular el total del carrito de compras
   calcularTotal():number{
    //recorre el arreglo de productos en el carrito y suma el resultado de (precio*cantidad) de cada item
    return this.productosEnCarrito.reduce((total,item)=>{
      return total+item.producto.precio * item.cantidad
    },0) //el acumulador 'total' en 0
   }

}
