import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

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
import { PersonajesComponent } from './components/personajes/personajes.component';
import { BanderasComponent } from './components/banderas/banderas.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReversoPipe } from './components/pipes/reverso.pipe';
import { CapitalizePipe } from './components/pipes/capitalize.pipe';
import { NumToArrPipe } from './components/pipes/num-to-arr.pipe';
import { AnimationComponent } from './components/animation/animation.component';

registerLocaleData(localeEs)

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
    ProductosComponent,
    PersonajesComponent,
    BanderasComponent,
    PipesComponent,
    ReversoPipe,
    CapitalizePipe,
    NumToArrPipe,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide:LOCALE_ID,useValue:'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
