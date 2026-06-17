import { Component } from '@angular/core';

interface MetricCard {
  icon: string;
  label: string;
  value: string;
  badge: string;
  tone: 'primary' | 'secondary' | 'tertiary' | 'error';
}

interface ActivityItem {
  title: string;
  detail: string;
  actor?: string;
  time: string;
  tag: string;
  imageUrl?: string;
  icon?: string;
}

interface OverdueLoan {
  title: string;
  user: string;
  delay: string;
}

interface TrendItem {
  label: string;
  value: number;
  tone: 'primary' | 'secondary' | 'tertiary';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  metrics: MetricCard[] = [
    {
      icon: 'book_5',
      label: 'Total de Libros',
      value: '12,842',
      badge: '+12%',
      tone: 'primary'
    },
    {
      icon: 'sync_alt',
      label: 'Prestamos Activos',
      value: '318',
      badge: '4 Alerta',
      tone: 'secondary'
    },
    {
      icon: 'person_search',
      label: 'Usuarios Registrados',
      value: '1,240',
      badge: '+45',
      tone: 'tertiary'
    }
  ];

  activities: ActivityItem[] = [
    {
      title: 'Cien Anos de Soledad',
      detail: 'Prestamo iniciado por',
      actor: 'Carlos Ruiz',
      time: 'HACE 15 MIN',
      tag: 'PRESTAMO',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAD1sRrn6E3DlPQK18n-HTGuwWmVdV5KsjdpxUE7O7qj1hO5fMmxX4dOlY-ARFdGhd8ZeTNcIPYfCwGY-kHn7du-IDC_qMEuuCFX5MZ_iucBB-2XnguSn_0dlbxFuW_4p7tZcR4UWzbDStxZvuLQh3wSh9XH-9OxB-D0bGt_j7GXUTYcwS2pHOCN6-7j52dd5W8qg6ukDdTZIfX6JnSJKFc4wmPZ8peaXvY7TcvGjXU1N0UMZKbbzEHKF3LHT5hv_7FUN78vI2Hn4g'
    },
    {
      title: 'Don Quijote de la Mancha',
      detail: 'Devolucion procesada -',
      actor: 'Inventario Act.',
      time: 'HACE 2 HORAS',
      tag: 'INVENTARIO',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD7BWLm33cyKOFbMIYo4q3uOhwuY0l0VbIsQbq7gq0UyU-FXR_S1r4cyyDOMA0XMR9ERYQe1OxafLi-Pc7XiquzqtjwYpL20ZRWc8uSe0ktUVN7Ktbpqv0uA56uRha4KTFNNdXvlM_9cbZx7tp6-0nywVUUBTzSq9KXZ_hXeob31DGbnYSY4hZKkPh8OVAM9S4j4q2T8jz5naWapasLS0GvrRTjA8yjIiPDreCV3SImFCRclN-MZgw9zN4VUPlplbaiLvFD_qpUFnA'
    },
    {
      title: 'Registro: Elena Martinez',
      detail: 'Nueva usuaria registrada satisfactoriamente.',
      time: 'AYER',
      tag: 'USUARIOS',
      icon: 'person_add'
    }
  ];

  overdueLoans: OverdueLoan[] = [
    {
      title: 'Fundamentos de Programacion',
      user: 'Pedro Picapiedra',
      delay: 'HACE 3D'
    },
    {
      title: 'Historia Moderna',
      user: 'Ana Bolena',
      delay: 'HACE 1D'
    }
  ];

  trends: TrendItem[] = [
    { label: 'CIENCIAS NATURALES', value: 42, tone: 'tertiary' },
    { label: 'LITERATURA CLASICA', value: 28, tone: 'primary' },
    { label: 'TECNOLOGIA', value: 15, tone: 'secondary' }
  ];
}
