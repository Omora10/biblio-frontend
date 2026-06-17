import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DashboardSummary {
  totalLibros: number;
  prestamosActivos: number;
  usuariosRegistrados: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  obtenerResumen(): Observable<DashboardSummary> {
    return of({
      totalLibros: 0,
      prestamosActivos: 0,
      usuariosRegistrados: 0
    });
  }
}
