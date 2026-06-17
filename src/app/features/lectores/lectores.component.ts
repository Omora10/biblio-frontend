import { Component } from '@angular/core';

interface Reader {
  id: string;
  nombre: string;
  correo: string;
  telefono: string;
  estado: 'Activo' | 'Inactivo';
  ultimaActividad: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-lectores',
  standalone: true,
  imports: [],
  templateUrl: './lectores.component.html',
  styleUrls: ['./lectores.component.css']
})
export class LectoresComponent {
  readers: Reader[] = [
    {
      id: 'USR-2024-8812',
      nombre: 'Beatriz Mendoza',
      correo: 'beatriz.m@email.com',
      telefono: '+52 55 1234 5678',
      estado: 'Activo',
      ultimaActividad: 'Hace 2 horas',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZyrqJTWM3a_tRguv8hsZAVGCqC7tyRy9ayvIcKmJ4ed2mXniLtxWpKRij0W9c4TjMRc0mnT_iY-51-2eZjAbLTq50_79lpYe9AQk4SipivHyfPRfndV8h_IOOSn3Ya4Fm2xMKeBE62bViqRvZsxKvQF_zpWg0LClj3TZG_YVnaUYlAjaPXuYiTHHR4KhjLAJOiZQ9azw-xSkvVj73wANVyN0mh8pbpQkBJfF9pGdumWWq7LXEW_Nzh9V8ySWKwgz22J0warJ3VM'
    },
    {
      id: 'USR-2023-4122',
      nombre: 'Ricardo Valero',
      correo: 'rvalero@archive.org',
      telefono: '+52 55 2234 9876',
      estado: 'Inactivo',
      ultimaActividad: '15 Feb 2024',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCCljHcQTZz6Z-EXWF4bm2_yF8REXaiY5pz5xY5A-rIng43iMQ0jn2CRaHlu39Af5sbfAlxAFzhCz3QbjiLvwWDtopsyFnkIfV4pwIRjIomV67nHHY5sDO5BygrU2uLVr8ciKy-6qzVqeaQUNRq4V-m376PaDBl2EnuS26cbkU27ZAJiaPocJwXNJmTlAfvF0pcnRlF1sNqZSzDhbBtOexfXjJRlb4TvkEuWiX4XNGH2mY1Y3e5cwRRQJWxDDxAAD18dKgreY4Izro'
    },
    {
      id: 'USR-2024-9005',
      nombre: 'Elena Solis',
      correo: 'esolis.edu@web.mx',
      telefono: '+52 55 9988 1122',
      estado: 'Activo',
      ultimaActividad: 'Ayer, 18:45',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBu6r_apqGaVpu1QAp6HV0avjQOkLlp06Z7gCACpGt4CqUspBN_lwbPW3iipp0zJAe1BO-tx42oBJiUOJEEH--7x_E3yddZHcH0LZJgstSGRAJT52YgJBIlg6x_8BZWL1SLxaUzGqJzUPobev1BIYDtjQUTcsP0To1SLd6SwKFM3YQ6urNhc-4rsCW7pfr0Zu5zHLDORNXIF3ts2ak77vpc6NinaPHam8jnozNMkLZYS7Jzm8ucqIv__Tjbn14fDZFJ7gyA3nzqLgE'
    }
  ];

  selectedReader: Reader = { ...this.readers[0] };

  editReader(reader: Reader): void {
    this.selectedReader = { ...reader };
  }

  updateSelectedReader(field: keyof Pick<Reader, 'nombre' | 'correo' | 'telefono' | 'estado'>, value: string): void {
    this.selectedReader = {
      ...this.selectedReader,
      [field]: value
    };
  }

  saveReader(): void {
    console.log('Lector mock actualizado', this.selectedReader);
  }
}
