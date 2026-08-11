import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  standalone: false,
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScrip','JavaScript','Java SE','C#','PHP','VB.Net','Python'];
  listatemasTS: string[] =['El manual de TypesScript','Los basicos','Tipos de Objetivos'];
  listatemasJS: string[] =['Comprendimeinto los frameworks JavaScript de lado del cliente','Estructuras de datos en JavaScript']
  listatemasC: string[] =['Creacion de un proyecto','Errores Sintacticos y Logicos']
  
  habilitar: boolean = true;

  constructor (){}

  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)? false:true;
  }
}
