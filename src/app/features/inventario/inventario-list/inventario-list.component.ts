import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';

interface BookItem {
  id: number;
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

  private readonly placeholderImage =
    'https://placehold.co/300x450?text=Sin+Portada';

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
          id: libro.id,
          title: libro.titulo,
          author: libro.autor,
          isbn: libro.isbn,
          status: libro.prestado ? 'Prestado' : 'Disponible',
          coverUrl:
            libro.imagenUrl && libro.imagenUrl.trim() !== ''
              ? libro.imagenUrl
              : this.placeholderImage
        }));
      },
      error: (error) => {
        console.error('Error cargando libros desde backend:', error);
      }
    });
  }

  eliminarLibro(id: number): void {
    console.log('ID recibido para eliminar:', id);

    const confirmar = confirm('¿Desea eliminar este libro?');

    if (!confirmar) {
      return;
    }

    this.libroService.eliminar(id).subscribe({
      next: () => {
        console.log('Libro eliminado correctamente');

        this.books = this.books.filter(book => book.id !== id);
      },
      error: (error) => {
        console.error('Error eliminando libro:', error);
      }
    });
  }
}