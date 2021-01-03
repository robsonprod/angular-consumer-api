import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosFormComponent } from './contatos-form/contatos-form.component';


const routes: Routes = [
  { path: 'contatos-form', component:  ContatosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
