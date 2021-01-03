import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosFormComponent } from './contatos-form/contatos-form.component';
import { ContatosListComponent } from './contatos-list/contatos-list.component';


@NgModule({
  declarations: [
    ContatosFormComponent,
    ContatosListComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FormsModule
  ], exports: [
    ContatosFormComponent,
    ContatosListComponent
  ]
})
export class ContatosModule { }
