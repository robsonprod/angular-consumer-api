import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosFormComponent } from './contatos-form/contatos-form.component';


@NgModule({
  declarations: [
    ContatosFormComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FormsModule
  ], exports: [
    ContatosFormComponent
  ]
})
export class ContatosModule { }
