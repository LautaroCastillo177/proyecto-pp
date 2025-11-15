import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CarritoService } from '../../servicio/carrito.service';
import { aja } from '../../model/aja.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cantidadProductos: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // escucha los cambios en el carrito para actualizar la cantidad de productos
    this.carritoService.carrito$.subscribe(
      (productos: { producto: aja; cantidad: number }[]) => {
        this.cantidadProductos = productos.reduce(
          (total, item) => total + item.cantidad,
          0
        );
      }
    );
  }

  onCarritoClick() {
    console.log('carrito clicked');
  }

  cambiarFondo() {
    const toggle = document.getElementById('toggle') as HTMLInputElement | null;
    const labelToggle = document.getElementById('label_toggle') as HTMLElement | null;

    if (toggle) {
      const checked = toggle.checked;
      document.body.classList.toggle('dark', checked);

      if (labelToggle) {
        labelToggle.innerHTML = checked
          ? '<i class="fa-solid fa-sun"></i>'
          : '<i class="fa-solid fa-moon"></i>';
      }
    }
  }
}
