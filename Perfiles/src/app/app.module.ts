import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MostraPerfilComponent } from './components/mostra-perfil/mostra-perfil.component';
import { HomeComponent } from './home/home.component';
import { DetallesPerfilComponent } from './components/detalles-perfil/detalles-perfil.component';
import { SubDetalPerfilComponent } from './components/sub-detal-perfil/sub-detal-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MostraPerfilComponent,
    HomeComponent,
    DetallesPerfilComponent,
    SubDetalPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
