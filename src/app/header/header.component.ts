<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <h1>Curso de Angular con Spring</h1>
  `
})
export class HeaderComponent {}
=======
import { Component } from "@angular/core";
import { AppRoutingModule } from "../app-routing-module";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [AppRoutingModule],
})
export class HeaderComponent {
  
  title: string = "Aplic. con Angular";

}
>>>>>>> fdf0f03 (cambio coin mejor estrructura)
