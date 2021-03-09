import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPerfilComponent } from './components/detalles-perfil/detalles-perfil.component';
import { FormularioEmpleadoComponent } from './components/empleado/formulario-empleado/formulario-empleado.component';
import { ListaEmpleadoComponent } from './components/empleado/lista-empleado/lista-empleado.component';
import { MostraPerfilComponent } from './components/mostra-perfil/mostra-perfil.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SubDetalPerfilComponent } from './components/sub-detal-perfil/sub-detal-perfil.component';
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
  {path:'listEmpleado', component: ListaEmpleadoComponent},
  {path:'registro', component: FormularioComponent},
  {path:'productos', component: ProductosComponent},
  {path:'**', redirectTo:'/perfil'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
