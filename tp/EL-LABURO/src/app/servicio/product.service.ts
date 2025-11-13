import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { aja } from '../model/aja.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //URL base del modulo de productos en la API
  private apiUrl= 'http://localhost/api_proyecto/public/products';

  constructor(private http: HttpClient) {}
  //construye las cabeceras http necesarias para las solicitudes protegidas
  //si existe un token en localIStorage, lo incluye como cabecera Authorization
  private getHeaders(): HttpHeaders{
    const token=localStorage.getItem('Token')

      let Headers = new HttpHeaders({
        'authorization':Token? `Baerer ${token}` : ''
      })
      return Headers
    
 }
      getProducts():Observable<aja[]>{
        return this.http.get<aja[]>(`$[this.apiUrl]/$[id]`)
        .pipe(catchError(this.hndlError));

      }
      
      getProductByIde(id:number):Observable<aja> {
        return this.http.get<aja>(`${this.apiUrl}/${id}`)
        .pipe(catchError(this.handlError))
      }
}
