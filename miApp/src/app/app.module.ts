import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewComponent } from './new/new.component';
import { ItemsComponent } from './new/items/items.component';
import { TotalComponent } from './total/total.component';
import { Ejemplo1Component } from './ejercicio/ejemplo1/ejemplo1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewComponent,
    ItemsComponent,
    TotalComponent,
    Ejemplo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
