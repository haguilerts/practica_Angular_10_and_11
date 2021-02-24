import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HogarComponent } from './components/hogar/hogar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { MenuComponent } from './menu/menu.component';
import { DetalleEmpledoComponent } from './components/detalle-empledo/detalle-empledo.component';
import { ProyectosComponent } from './components/DetalleEmpledo/proyectos/proyectos.component';
import { CvComponent } from './components/DetalleEmpledo/cv/cv.component';
import { ExperienciaComponent } from './components/DetalleEmpledo/experiencia/experiencia.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { IngresarUsuariosComponent } from './components/ingresar-usuarios/ingresar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HogarComponent,
    PerfilComponent,
    MensajeComponent,
    MenuComponent,
    DetalleEmpledoComponent,
    ProyectosComponent,
    CvComponent,
    ExperienciaComponent,
    UsuariosComponent,
    IngresarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
