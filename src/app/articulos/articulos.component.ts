import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo';
import { ArticuloService } from './articulo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
  standalone: false
})
export class ArticulosComponent implements OnInit {

  articulos: Articulo[] = [];
  articulosFiltrados: Articulo[] = [];
  articuloSeleccionado: Articulo = new Articulo();
  terminoBusqueda: string = '';
  
  fotoSeleccionada: File | null = null;
  isDragging: boolean = false;

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.cargarArticulos();
  }

  cargarArticulos(): void {
    this.articuloService.getArticulos().subscribe(data => {
      this.articulos = data;
      this.articulosFiltrados = data;
    });
  }
  
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const archivo = event.dataTransfer.files[0];
      this.validarYProcesarFoto(archivo);
    }
  }

  seleccionarFoto(event: any): void {
    const archivo = event.target.files[0];
    if (archivo) {
      this.validarYProcesarFoto(archivo);
    }
  }

  validarYProcesarFoto(archivo: File): void {
    if (archivo.type.indexOf('image') < 0) {
      Swal.fire('Error de archivo', 'El archivo seleccionado debe ser una imagen válida.', 'error');
      this.fotoSeleccionada = null;
      return;
    }
    this.fotoSeleccionada = archivo;
  }

  quitarFoto(event: Event): void {
    event.stopPropagation();
  }

  buscar(): void {
    const term = this.terminoBusqueda.toLowerCase().trim();
    if (!term) {
      this.articulosFiltrados = this.articulos;
      return;
    }
    this.articulosFiltrados = this.articulos.filter(art =>
      art.codigo.toLowerCase().includes(term) ||
      art.nombre.toLowerCase().includes(term) ||
      art.categoria.toLowerCase().includes(term)
    );
  }

  guardar(): void {
    if (this.articuloSeleccionado.id) {
      this.articuloService.update(this.articuloSeleccionado, this.fotoSeleccionada).subscribe(() => {
        Swal.fire('Artículo Actualizado', `El artículo ${this.articuloSeleccionado.nombre} fue actualizado`, 'success');
        this.cargarArticulos();
        this.limpiarFormulario();
      });
    } else {
      this.articuloService.create(this.articuloSeleccionado, this.fotoSeleccionada).subscribe(art => {
        Swal.fire('Artículo Guardado', `El artículo ${art.nombre} fue creado con éxito`, 'success');
        this.cargarArticulos();
        this.limpiarFormulario();
      });
    }
  }

  editar(articulo: Articulo): void {
    this.articuloSeleccionado = { ...articulo };
    this.fotoSeleccionada = null;
  }

  eliminar(id: number): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: "No podrás revertir este cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articuloService.delete(id).subscribe(() => {
          Swal.fire('Eliminado', 'El artículo ha sido eliminado.', 'success');
          this.cargarArticulos();
        });
      }
    });
  }

  limpiarFormulario(): void {
    this.articuloSeleccionado = new Articulo();
    this.fotoSeleccionada = null;
    this.isDragging = false;
  }
}