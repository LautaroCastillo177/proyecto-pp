import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='http://localhost/api_proyecto/public/users';

  constructor(private http:HttpClient) {}
  login(datos:any):Observable<any>{
    return this.http.post('${this.apiUrl}/login',datos)
  }
  
  register(datos:any):Observable<any>{
    return this.http.post('${this.apiUrl}/register',datos)
  }
  //guarda el token y el rol del usuario en el amlacenamiento local
  guardaSesion(token:string, rol:string){
    localStorage.setItem('token',token);
    localStorage.setItem('rol',rol);
  }
  //retorna el rol almacenado, o null si no existe
  obtenerRol(): string | null{
    return localStorage.getItem('rol');
  }

  esAdmin():boolean{
    return localStorage.getItem('rol')==='admin';
  }
  //eliminalos datos de la sesion almacenados
  logut(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }
}
