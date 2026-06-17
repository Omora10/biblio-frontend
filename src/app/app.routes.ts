import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { InventarioListComponent } from './features/inventario/inventario-list/inventario-list.component';
import { InventarioNuevoComponent } from './features/inventario/inventario-nuevo/inventario-nuevo.component';
import { PrestamosListComponent } from './features/prestamos/prestamos-list/prestamos-list.component';
import { PrestamosNuevoComponent } from './features/prestamos/prestamos-nuevo/prestamos-nuevo.component';
import { UsuariosComponent } from './features/usuarios/usuarios.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inventario', component: InventarioListComponent },
      { path: 'inventario/nuevo', component: InventarioNuevoComponent },
      { path: 'prestamos', component: PrestamosListComponent },
      { path: 'prestamos/nuevo', component: PrestamosNuevoComponent },
      {
        path: 'lectores',
        loadComponent: () =>
          import('./features/lectores/lectores.component').then((component) => component.LectoresComponent)
      },
      { path: 'usuarios', component: UsuariosComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
