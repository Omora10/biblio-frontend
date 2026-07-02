import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LibroRequest } from '../../../core/models/libro.model';
import { LibroService } from '../../../core/services/libro.service';

@Component({
  selector: 'app-inventario-nuevo',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './inventario-nuevo.component.html',
  styleUrl: './inventario-nuevo.component.css'
})
export class InventarioNuevoComponent implements OnInit {

  genres = ['Ficcion', 'No Ficcion', 'Ciencia', 'Historia', 'Biografia'];

  recentBooks = [
    {
      title: 'Cien anos de soledad',
      author: 'Gabriel Garcia Marquez',
      isbn: '978-0307350433',
      status: 'DISPONIBLE'
    },
    {
      title: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes',
      isbn: '978-8420412146',
      status: 'MANTENIMIENTO'
    }
  ];

  inventoryForm = this.formBuilder.nonNullable.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    isbn: ['', Validators.required],
    imagenUrl: [''],
    genero: ['', Validators.required],
    descripcion: ['', Validators.required],
    estado: ['disponible', Validators.required]
  });

  submitted = false;

  modoEdicion = false;
  libroId = 0;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly libroService: LibroService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.modoEdicion = true;
      this.libroId = Number(id);

      console.log('Modo edición');
      console.log('Libro ID:', this.libroId);

      this.cargarLibro(this.libroId);

    }

  }

  private cargarLibro(id: number): void {

    this.libroService.obtenerPorId(id).subscribe({

      next: (libro) => {

        this.inventoryForm.patchValue({
          titulo: libro.titulo,
          autor: libro.autor,
          isbn: libro.isbn,
          imagenUrl: libro.imagenUrl
        });

      },

      error: (error) => {
        console.error('Error cargando libro', error);
      }

    });

  }
    save(): void {

    this.submitted = true;

    if (this.inventoryForm.invalid) {
      this.inventoryForm.markAllAsTouched();
      return;
    }

    const request: LibroRequest = {
      titulo: this.inventoryForm.getRawValue().titulo,
      autor: this.inventoryForm.getRawValue().autor,
      isbn: this.inventoryForm.getRawValue().isbn,
      imagenUrl: this.inventoryForm.getRawValue().imagenUrl
    };

    if (this.modoEdicion) {

      this.libroService.actualizar(this.libroId, request).subscribe({

        next: (libro) => {

          console.log('Libro actualizado correctamente', libro);

          this.router.navigate(['/inventario']);

        },

        error: (error) => {

          console.error('Error actualizando libro', error);

        }

      });

    } else {

      this.libroService.crear(request).subscribe({

        next: (libro) => {

          console.log('Libro creado correctamente', libro);

          this.inventoryForm.reset({
            titulo: '',
            autor: '',
            isbn: '',
            imagenUrl: '',
            genero: '',
            descripcion: '',
            estado: 'disponible'
          });

          this.submitted = false;

          this.router.navigate(['/inventario']);

        },

        error: (error) => {

          console.error('Error al crear libro', error);

        }

      });

    }

  }

  isInvalid(controlName: keyof typeof this.inventoryForm.controls): boolean {

    const control = this.inventoryForm.controls[controlName];

    return control.invalid && (control.touched || this.submitted);

  }

}