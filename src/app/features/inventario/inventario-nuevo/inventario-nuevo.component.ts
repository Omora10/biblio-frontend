import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventario-nuevo',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './inventario-nuevo.component.html',
  styleUrl: './inventario-nuevo.component.css'
})
export class InventarioNuevoComponent {
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
    genero: ['', Validators.required],
    descripcion: ['', Validators.required],
    estado: ['disponible', Validators.required]
  });

  submitted = false;

  constructor(private readonly formBuilder: FormBuilder) {}

  save(): void {
    this.submitted = true;

    if (this.inventoryForm.invalid) {
      this.inventoryForm.markAllAsTouched();
      return;
    }

    console.log('Registro de inventario mock', this.inventoryForm.getRawValue());
    this.inventoryForm.reset({
      titulo: '',
      autor: '',
      isbn: '',
      genero: '',
      descripcion: '',
      estado: 'disponible'
    });
    this.submitted = false;
  }

  isInvalid(controlName: keyof typeof this.inventoryForm.controls): boolean {
    const control = this.inventoryForm.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }
}
