export interface Prestamo {
  id: number;
  usuarioId: number;
  libroId: number;
  fechaPrestamo: string;
  fechaDevolucion: string | null;
  devuelto: boolean;
}

export interface PrestamoRequest {
  usuarioId: number;
  libroId: number;
}
