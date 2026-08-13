import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from './articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private urlEndPoint: string = 'http://localhost:8080/api/articulos';

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<Articulo[]> {
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
  }
}