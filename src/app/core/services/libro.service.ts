import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Libro, LibroRequest } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private readonly apiUrl = `${environment.apiUrl}/api/libros`;

  constructor(private readonly http: HttpClient) {}

  obtenerTodos(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
  }

  crear(request: LibroRequest): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, request);
  }

  actualizar(id: number, request: LibroRequest): Observable<Libro> {
    return this.http.put<Libro>(`${this.apiUrl}/${id}`, request);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
