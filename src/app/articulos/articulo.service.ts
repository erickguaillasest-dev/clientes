import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from './articulo';
=======
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Articulo } from '../articulos/articulo';
import { environment } from '../../environments/environment'; // Ajusta la ruta según dónde esté tu servicio
>>>>>>> fdf0f03 (cambio coin mejor estrructura)

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

<<<<<<< HEAD
  private urlEndPoint: string = 'http://localhost:8080/api/articulos';
=======
  private urlEndPoint: string = `${environment.apiUrl}/api/articulos`;
  private httpHeaders = {'Content-Type': 'application/json'};
>>>>>>> fdf0f03 (cambio coin mejor estrructura)

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<Articulo[]> {
<<<<<<< HEAD
    return this.http.get<Articulo[]>(this.urlEndPoint);
  }

  create(articulo: Articulo, archivo: File | null): Observable<Articulo> {
    const formData = new FormData();
    formData.append('codigo', articulo.codigo || '');
    formData.append('nombre', articulo.nombre || '');
    formData.append('categoria', articulo.categoria || '');
    formData.append('precio', articulo.precio ? articulo.precio.toString() : '0');
    if (archivo) {
      formData.append('archivo', archivo);
    }
    return this.http.post<Articulo>(this.urlEndPoint, formData);
  }

  update(articulo: Articulo, archivo: File | null): Observable<Articulo> {
    const formData = new FormData();
    formData.append('codigo', articulo.codigo || '');
    formData.append('nombre', articulo.nombre || '');
    formData.append('categoria', articulo.categoria || '');
    formData.append('precio', articulo.precio ? articulo.precio.toString() : '0');
    if (archivo) {
      formData.append('archivo', archivo);
    }
    return this.http.put<Articulo>(`${this.urlEndPoint}/${articulo.id}`, formData);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`);
=======
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Articulo[])
    );
  }

  buscar(termino: string): Observable<Articulo[]> {
    let params = new HttpParams().set('termino', termino);
    return this.http.get<Articulo[]>(`${this.urlEndPoint}/buscar`, { params });
  }

  getArticulo(id: number): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.urlEndPoint}/${id}`);
  }

  create(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.urlEndPoint, articulo, {headers: this.httpHeaders});
  }

  update(articulo: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(`${this.urlEndPoint}/${articulo.id}`, articulo, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Articulo> {
    return this.http.delete<Articulo>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
>>>>>>> fdf0f03 (cambio coin mejor estrructura)
  }
}