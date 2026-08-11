import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Router } from '@angular/router';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-from', 
  standalone: false,
  templateUrl: './from.component.html',
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: string = "Crear Cliente";

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes']);
      Swal.fire(
        'Cliente guardado', 
        `Cliente ${cliente.nombre} guardado con éxito`, 
        'success'
      );
    });
  }
}