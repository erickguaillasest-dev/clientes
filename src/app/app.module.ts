import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from '../footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { Routes, RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/from.component';
import { FormsModule } from '@angular/forms';
import { ArticulosComponent } from './articulos/articulos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  {path: '', redirectTo: '',pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  { path: 'clientes/form', component: FormComponent },
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'articulos', component: ArticulosComponent},
  { path: 'proveedores', component: ProveedoresComponent }
  


];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    ArticulosComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
