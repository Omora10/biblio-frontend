import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prestamos-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <h2>Prestamos</h2>
      <p>Listado de prestamos activos e historicos.</p>
      <a routerLink="/prestamos/nuevo">Nuevo prestamo</a>
    </section>
  `
})
export class PrestamosListComponent {}
