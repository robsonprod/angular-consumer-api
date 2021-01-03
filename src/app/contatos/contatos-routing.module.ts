import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosFormComponent } from './contatos-form/contatos-form.component';
import { ContatosListComponent } from './contatos-list/contatos-list.component';


const routes: Routes = [
  { path: 'contatos-form', component:  ContatosFormComponent },
  { path: 'contatos-list', component:  ContatosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
