import { Component, OnInit } from '@angular/core';

import { Contato } from '../contato';
import { ContatosService } from '../../contatos.service';

@Component({
  selector: 'app-contatos-form',
  templateUrl: './contatos-form.component.html',
  styleUrls: ['./contatos-form.component.css']
})
export class ContatosFormComponent implements OnInit {

  contato: Contato;
  success: boolean = false;
  isLoadingResults = false;

  constructor( private service: ContatosService ) {
    this.contato = new Contato();
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.isLoadingResults = true;
    console.log(this.contato);

    this.service
      .salvar(this.contato)
      .subscribe(res => {
        console.log(res);
        this.success = true;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
