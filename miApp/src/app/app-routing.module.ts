import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './new/items/items.component';
import { TotalComponent } from './total/total.component';
import { HeaderComponent } from './header/header.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path:'',
    component:TotalComponent
  },
  {
    path:'total',
    component:TotalComponent
  },
  {
    path:'header',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
