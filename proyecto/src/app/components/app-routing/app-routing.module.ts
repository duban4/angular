import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from '../lista/lista.component';
import { MenuComponent } from '../menu/menu.component';
import { DocumentoComponent } from '../documento/documento.component';
import { ModalComponent } from '../modal/modal.component';


const routes:Routes =[
    { path: 'menu',component:MenuComponent},
    { path: 'lista',component:ListaComponent},
    { path: 'documento',component:DocumentoComponent},
    { path: 'modal',component:ModalComponent},
    { path: '**',redirectTo: 'menu'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
