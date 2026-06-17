import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
  estado: 'Activo' | 'Inactivo' | 'Sancionado';
  fechaRegistro: string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  users: Usuario[] = [
    { id: 1, nombre: 'Alejandro Mendoza', correo: 'amendoza@edu.co', rol: 'Usuario', estado: 'Activo', fechaRegistro: '2023-10-12' },
    { id: 2, nombre: 'Elena Rodríguez', correo: 'elena.rod@ciencia.org', rol: 'Investigador', estado: 'Inactivo', fechaRegistro: '2023-01-05' },
    { id: 3, nombre: 'Carlos Villa', correo: 'c.villa@u-central.edu', rol: 'Docente', estado: 'Sancionado', fechaRegistro: '2024-02-15' }
  ];

  filteredUsers: Usuario[] = [...this.users];
  activeFilter = '';
  formOpen = false;
  editing: Usuario | null = null;

  userForm = this.fb.group({
    id: [null as unknown as number | null],
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    password: [''],
    rol: ['Usuario', Validators.required],
    estado: ['Activo', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  openCreate() {
    this.editing = null;
    this.userForm.reset({ rol: 'Usuario', estado: 'Activo' });
    this.formOpen = true;
  }

  openEdit(u: Usuario) {
    this.editing = u;
    this.userForm.setValue({ id: u.id, nombre: u.nombre, correo: u.correo, password: '', rol: u.rol, estado: u.estado });
    this.formOpen = true;
  }

  closeForm() {
    this.formOpen = false;
  }

  save() {
    if (this.userForm.invalid) return;
    const val: any = this.userForm.value;
    if (this.editing) {
      // update
      const idx = this.users.findIndex((x) => x.id === (val.id as number));
      if (idx !== -1) {
        this.users[idx] = {
          ...this.users[idx],
          nombre: String(val.nombre || this.users[idx].nombre),
          correo: String(val.correo || this.users[idx].correo),
          rol: String(val.rol || this.users[idx].rol),
          estado: (String(val.estado) as any) || this.users[idx].estado
        };
      }
    } else {
      const id = Math.max(0, ...this.users.map((u) => u.id)) + 1;
      this.users.unshift({
        id,
        nombre: String(val.nombre || ''),
        correo: String(val.correo || ''),
        rol: String(val.rol || 'Usuario'),
        estado: (String(val.estado) as any) || 'Activo',
        fechaRegistro: new Date().toISOString().slice(0, 10)
      });
    }
    this.filteredUsers = [...this.users];
    this.closeForm();
  }

  toggleEstado(u: Usuario) {
    u.estado = u.estado === 'Activo' ? 'Inactivo' : 'Activo';
    this.filteredUsers = [...this.users];
  }

  filterEstado(estado: string) {
    this.activeFilter = estado;
    if (!estado) this.filteredUsers = [...this.users];
    else this.filteredUsers = this.users.filter((u) => u.estado === estado);
  }

  initials(name: string) {
    return (name || '')
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  formatDate(d: string) {
    try {
      const dt = new Date(d);
      return dt.toLocaleDateString();
    } catch (e) {
      return d;
    }
  }
}
