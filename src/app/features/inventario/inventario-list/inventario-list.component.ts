import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';

interface BookItem {
  title: string;
  author: string;
  isbn: string;
  status: 'Disponible' | 'Prestado' | 'En Mantenimiento';
  coverUrl: string;
}

@Component({
  selector: 'app-inventario-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inventario-list.component.html',
  styleUrl: './inventario-list.component.css'
})
export class InventarioListComponent implements OnInit {
  authors = ['Todos los autores', 'Gabriel Garcia Marquez', 'Isabel Allende', 'Jorge Luis Borges'];
  genres = ['Cualquier genero', 'Realismo Magico', 'Ficcion Historica', 'Ensayo', 'Ciencia Ficcion'];
  statusFilters = ['Todos', 'Disponible', 'Prestado'];

  books: BookItem[] = [];

  pages = ['1', '2', '3', '...'];

  constructor(
    private readonly libroService: LibroService
  ) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.obtenerTodos().subscribe({
      next: (data) => {
        console.log('Libros cargados desde backend:', data);

        this.books = data.map((libro) => ({
          title: libro.titulo,
          author: libro.autor,
          isbn: libro.isbn,
          status: libro.prestado ? 'Prestado' : 'Disponible',
          coverUrl: 'https://picsum.photos/300/450'
        }));
      },
      error: (error) => {
        console.error('Error cargando libros desde backend:', error);
      }
    });
  }
}