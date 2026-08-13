import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Router, ActivatedRoute} from '@angular/router';
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

  constructor(private clienteService: ClienteService,private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarClientes()


  }

  cargarClientes():void{
    this.activateRouter.params.subscribe(params =>{
      let id = params['id']
      if(id){
         this.clienteService.getCliente(id).subscribe((cliente) =>this.cliente=cliente)
      }
    })
  }
  
  
  public create(): void {
    this.clienteService.create(this.cliente)
    .subscribe(cliente => {
     
      this.router.navigate(['/clientes']);
      
      Swal.fire('Cliente guardado', `Cliente ${cliente.nombre} guardado con éxito`, 'success'
      );
    });
  }
}