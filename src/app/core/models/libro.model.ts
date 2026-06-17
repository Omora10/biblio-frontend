export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  isbn: string;
  prestado: boolean;
}

export interface LibroRequest {
  titulo: string;
  autor: string;
  isbn: string;
}
