import { Routes } from '@angular/router';
import { ArmoniaComponent } from './musikita/contacto/armonia.component';
import { NotasEscalasComponent } from './musikita/novedades/notas-escalas.component';
import { RitmoCompasComponent } from './musikita/ofertas/ritmo-compas.component';
import { InicioComponent } from './inicio/inicio.component';
import { BellezasComponent } from './muebles/bellezas.component';
import { CompraComponent } from './compra/compra.component';
import { CarritoComponent } from './carrito/carrito.component';
import { QuiensomoComponent } from './quiensomo/quiensomo.component';
import { RegistrarseComponent } from './musikita/registrarse/registrarse.component';
import { ComienzoComponent } from './musikita/comienzo/comienzo.component';
import { FavoritosComponent } from './favoritos/favoritos.component';



export const routes: Routes = [
    {path: '',redirectTo:'/inicio',pathMatch:'full'},
    {path:'contacto',component:ArmoniaComponent},
    {path:'novedades',component:NotasEscalasComponent},
    {path:'ofertas',component:RitmoCompasComponent},
    {path:'inicio',component:InicioComponent},
    {path:'muebles',component:BellezasComponent},
    {path:'compra',component:CompraComponent},
    {path:'carrito',component:CarritoComponent},
    {path:'quiensomo',component:QuiensomoComponent},
    {path:'inicio-sesion',component:ComienzoComponent},
    {path:'registro',component:RegistrarseComponent},
    {path:'favoritos',component:FavoritosComponent},


    





];
