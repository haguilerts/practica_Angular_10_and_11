import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MostraPerfilComponent } from './components/mostra-perfil/mostra-perfil.component';
import { HomeComponent } from './home/home.component';
import { DetallesPerfilComponent } from './components/detalles-perfil/detalles-perfil.component';
import { SubDetalPerfilComponent } from './components/sub-detal-perfil/sub-detal-perfil.component';
import { FormularioComponent } from './pagina/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioEmpleadoComponent } from './components/empleado/formulario-empleado/formulario-empleado.component';
import { ListaEmpleadoComponent } from './components/empleado/lista-empleado/lista-empleado.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MostraPerfilComponent,
    HomeComponent,
    DetallesPerfilComponent,
    SubDetalPerfilComponent,
    FormularioComponent,
    LoginComponent,
    FormularioEmpleadoComponent,
    ListaEmpleadoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
