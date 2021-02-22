import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogarComponent } from './components/hogar/hogar.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DetalleEmpledoComponent } from './components/detalle-empledo/detalle-empledo.component';
import { ProyectosComponent } from './components/DetalleEmpledo/proyectos/proyectos.component';
import { CvComponent } from './components/DetalleEmpledo/cv/cv.component';
import { ExperienciaComponent } from './components/DetalleEmpledo/experiencia/experiencia.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'mensaje'},
  {path:'inicio', redirectTo:'home'},
  {path:'hogar', component:   HogarComponent},
  {path:'home', component:   HogarComponent},
  {path:'msn', redirectTo:'mensaje'},
  {path:'mensaje',component:  MensajeComponent},  
  {path:'perfil',component:   PerfilComponent},
  {path:'empleados/:idEmpleado', component: DetalleEmpledoComponent, children:[ 
      {path:'cv',component: CvComponent},
      {path:'exp',component: ExperienciaComponent},
      {path:'pro',component: ProyectosComponent},
    ]
  },
  {path:'**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
