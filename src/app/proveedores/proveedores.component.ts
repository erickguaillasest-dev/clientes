import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import { ProveedorService } from './proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  standalone : false
})
export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[] = [];
  nuevoProveedor: Proveedor = new Proveedor();

  prod1: string = '';
  prod2: string = '';
  prod3: string = '';

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(): void {
    this.proveedorService.getProveedores().subscribe(data => this.proveedores = data);
  }

  guardar(): void {
    this.nuevoProveedor.productosMasVendidos = [this.prod1, this.prod2, this.prod3];
    this.proveedorService.create(this.nuevoProveedor).subscribe(prov => {
      Swal.fire('Registrado', `Proveedor ${prov.nombre} registrado con éxito`, 'success');
      this.cargarProveedores();
      this.limpiar();
    });
  }

  eliminar(id: number): void {
    Swal.fire({
      title: '¿Desea eliminar el proveedor?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.proveedorService.delete(id).subscribe(() => {
          Swal.fire('Eliminado', 'Proveedor eliminado con éxito', 'success');
          this.cargarProveedores();
        });
      }
    });
  }

  limpiar(): void {
    this.nuevoProveedor = new Proveedor();
    this.prod1 = '';
    this.prod2 = '';
    this.prod3 = '';
  }
}