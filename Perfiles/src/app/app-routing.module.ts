import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPerfilComponent } from './components/detalles-perfil/detalles-perfil.component';
import { MostraPerfilComponent } from './components/mostra-perfil/mostra-perfil.component';
import { SubDetalPerfilComponent } from './components/sub-detal-perfil/sub-detal-perfil.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/perfil'},
  {path:'home', component: MenuComponent},
  {path:'perfil', component: MostraPerfilComponent},
  {path:'detalles/:profecion/:id', component: DetallesPerfilComponent, children:[
    {path:'musicas',component:SubDetalPerfilComponent},
    {path:'trofeos',component:SubDetalPerfilComponent},
  ]},
  {path:'**', redirectTo:'/perfil'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
