import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './components/animation/animation.component';
import { BanderasComponent } from './components/banderas/banderas.component';
import { DetallesPerfilComponent } from './components/detalles-perfil/detalles-perfil.component';
import { FormularioEmpleadoComponent } from './components/empleado/formulario-empleado/formulario-empleado.component';
import { ListaEmpleadoComponent } from './components/empleado/lista-empleado/lista-empleado.component';
import { MapasGoogleComponent } from './components/mapas-google/mapas-google.component';

import { MostraPerfilComponent } from './components/mostra-perfil/mostra-perfil.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SubDetalPerfilComponent } from './components/sub-detal-perfil/sub-detal-perfil.component';
import { AgregarEmpleadosComponent } from './firebase/agregar-empleados/agregar-empleados.component';
import { ListEmpleadosComponent } from './firebase/list-empleados/list-empleados.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './pagina/formulario/formulario.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/perfil'},
  {path:'home', component: MenuComponent},
  {path:'perfil', component: MostraPerfilComponent},
  {path:'detalles/:profecion/:id', component: DetallesPerfilComponent, children:[
    {path:'musicas',component:SubDetalPerfilComponent},
    {path:'trofeos',component:SubDetalPerfilComponent},
  ]},
  {path:'formEmpleado', component: FormularioEmpleadoComponent},
  {path:'banderas', component: BanderasComponent},
  {path:'personajes', component: PersonajesComponent},
  {path:'listEmpleado', component: ListaEmpleadoComponent},
  {path:'registro', component: FormularioComponent},
  {path:'productos', component: ProductosComponent},
  {path:'pipes', component: PipesComponent},
  {path:'animacion', component: AnimationComponent},
  {path:'mapas', component: MapasGoogleComponent},
  {path:'listFirebase', component: ListEmpleadosComponent},
  {path:'addFirebase', component: AgregarEmpleadosComponent},
  {path:'editFirebase/:idPerson', component: AgregarEmpleadosComponent},
  {path:'**', redirectTo:'/perfil'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
