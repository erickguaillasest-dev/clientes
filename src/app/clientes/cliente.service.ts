import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
<<<<<<< HEAD
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, { headers: this.httpHeaders });
  }

  getCliente(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }
=======
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 

@Injectable ({
    providedIn: 'root'
})
export class ClienteService {

    private urlEndPoint: string = `${environment.apiUrl}/api/clientes`;
    private httpHeaders = {'Content-Type': 'application/json'};
    
    constructor(private http: HttpClient ) {}

    getClientes(): Observable<Cliente[]>{
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as Cliente[])
        );
    }

    create(cliente: Cliente): Observable<Cliente>{
        return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
    }

    getCliente(id: number): Observable<Cliente>{
        return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
    }

    update(cliente: Cliente): Observable<Cliente>{
        return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
    }

    delete(id: number): Observable<Cliente>{
        return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
    }
>>>>>>> fdf0f03 (cambio coin mejor estrructura)
}