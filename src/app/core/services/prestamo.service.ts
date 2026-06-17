import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Prestamo, PrestamoRequest } from '../models/prestamo.model';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private readonly apiUrl = `${environment.apiUrl}/api/prestamos`;

  constructor(private readonly http: HttpClient) {}

  crear(request: PrestamoRequest): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.apiUrl, request);
  }

  devolver(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/devolver`, null);
  }

  renovar(id: number): Observable<Prestamo> {
    return this.http.put<Prestamo>(`${this.apiUrl}/${id}/renovar`, null);
  }

  listarPorUsuario(usuarioId: number): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }
}
