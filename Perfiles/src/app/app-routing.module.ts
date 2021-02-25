import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostraPerfilComponent } from './components/mostra-perfil/mostra-perfil.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/perfil'},
  {path:'home', component: MenuComponent},
  {path:'perfil', component: MostraPerfilComponent},
  {path:'**', redirectTo:'/perfil'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
