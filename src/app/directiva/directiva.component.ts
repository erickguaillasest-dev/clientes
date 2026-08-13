import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css'],
  standalone: false
})
export class DirectivaComponent {

  listatemasTS: string[] = ['TypeScript', 'Interfaces', 'Clases', 'Decoradores'];
  listatemasJS: string[] = ['JavaScript ES6', 'Promesas', 'Async/Await', 'DOM'];
  listatemasC: string[] = ['Sintaxis C#', 'POO', 'LINQ', 'ASP.NET Core'];

  habilitar: boolean = true;

  setHabilitar(): void {
    this.habilitar = !this.habilitar;
  }
}