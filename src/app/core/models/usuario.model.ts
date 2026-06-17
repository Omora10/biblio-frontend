export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

export interface UsuarioRequest {
  nombre: string;
  email: string;
  password?: string;
}
