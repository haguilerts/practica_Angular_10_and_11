import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



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
import { FormComponent } from './components/form/form.component';
import { ListaComponent } from './components/lista/lista.component';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { SemaforComponent } from './components/semafor/semafor.component';
import { MainComponent } from './main/main.component';
import { ProductoComponent } from './cajaRegistradora/producto/producto.component';
import { RegistroProducComponent } from './cajaRegistradora/registro-produc/registro-produc.component';
import { CajaRegistradoraComponent } from './cajaRegistradora/caja-registradora/caja-registradora.component';
import { SubrayadoDirective } from './directivas/subrayado.directive';
import { ListProducComponent } from './ListaCompras/list-produc/list-produc.component';
import { ComprasListComponent } from './ListaCompras/compras-list/compras-list.component';
import { MyFormularioComponent } from './ListaCompras/my-formulario/my-formulario.component';
import { DOMComponent } from './components/renderer2/dom/dom.component';

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
    
    FormComponent,
    ListaComponent,
    CicloVidaComponent,
    DirectivasComponent,
    SemaforComponent,
    MainComponent,
    ProductoComponent,
    RegistroProducComponent,
    CajaRegistradoraComponent,
    SubrayadoDirective,
    ListProducComponent,
    ComprasListComponent,
    MyFormularioComponent,
    DOMComponent
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
