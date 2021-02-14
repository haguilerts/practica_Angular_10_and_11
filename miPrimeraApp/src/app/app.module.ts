import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludarComponent } from './saludar/saludar.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Tio1Component } from './tio1/tio1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { EventosComponent } from './eventos/eventos.component';
import { SumaComponent } from './arimetica/suma/suma.component';
import { CronometroComponent } from './arimetica/cronometro/cronometro.component';
import { PrimoComponent } from './tio1/primo/primo.component';
import { CalculadoraComponent } from './arimetica/calculadora/calculadora.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { FormularioComponent } from './components/formulario/Formulario.component';
import { FormComponent } from './components/form/form.component';
import { ListaComponent } from './components/lista/lista.component';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { SemaforComponent } from './components/semafor/semafor.component';
import { MainComponent } from './main/main.component';
import { ProductoComponent } from './cajaRegistradora/producto/producto.component';
import { RegistroProducComponent } from './cajaRegistradora/registro-produc/registro-produc.component';
import { CajaRegistradoraComponent } from './cajaRegistradora/caja-registradora/caja-registradora.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    PadreComponent,
    Hijo1Component,
    Tio1Component,
    Hijo2Component,
    EventosComponent,
    SumaComponent,
    CronometroComponent,
    PrimoComponent,
    CalculadoraComponent,
    AlertaComponent,
    FormularioComponent,
    FormComponent,
    ListaComponent,
    CicloVidaComponent,
    DirectivasComponent,
    SemaforComponent,
    MainComponent,
    ProductoComponent,
    RegistroProducComponent,
    CajaRegistradoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // FormGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
