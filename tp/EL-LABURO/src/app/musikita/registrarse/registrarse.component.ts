import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  imports: [RouterModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {

  constructor(private router: Router) { }

  registrarUsuario() {
    this.router.navigate(['/inicio]'])
  }
}
