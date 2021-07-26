import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from '../lista/lista.component';
import { MenuComponent } from '../menu/menu.component';

const routes:Routes =[
    { path: 'menu',component:MenuComponent},
    { path: 'lista',component:ListaComponent},
    { path: '**',redirectTo: 'menu'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
