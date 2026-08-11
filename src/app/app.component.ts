import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'Mi primera aplicacion en Angular';

  curso: string =  'TDS M4A';

  estudiante: string = 'Erick Guaillas';
}
