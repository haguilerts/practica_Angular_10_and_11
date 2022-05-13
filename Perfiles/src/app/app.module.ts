import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//--------------------------------------
import { environment } from 'src/environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
//import { GoogleMapsModule } from '@angular/google-maps'

//import { GoogleMapsAngularModule } from 'google-maps-angular';


//compoentes
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
import { MapasGoogleComponent } from './components/mapas-google/mapas-google.component';
import { PruebaComponent } from './firebase/prueba/prueba.component';
import { ListEmpleadosComponent } from './firebase/list-empleados/list-empleados.component';
import { AgregarEmpleadosComponent } from './firebase/agregar-empleados/agregar-empleados.component';
import { MenuHederComponent } from './menu-heder/menu-heder.component';
import { TrasnlatePipe } from './firebase/agregar-empleados/trasnlate.pipe';

import { FirebaseModule } from './firebase/firebase.module';


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
    AnimationComponent,
    MapasGoogleComponent,
    PruebaComponent,
    ListEmpleadosComponent,
    AgregarEmpleadosComponent,
    MenuHederComponent,
    TrasnlatePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    FirebaseModule,
    //GoogleMapsModule,
   // GoogleMapsAngularModule,
 
   //// GoogleMapsModule,
  ],
  providers: [{
    provide:LOCALE_ID,useValue:'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
