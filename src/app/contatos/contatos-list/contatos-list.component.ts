import { Component, OnInit } from '@angular/core';
import { ContatosService } from 'src/app/contatos.service';
import { Contato } from '../contato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.css']
})
export class ContatosListComponent implements OnInit {

  contatos: Contato[] = [];

  constructor( private service: ContatosService,
               private router: Router) {

  }

  ngOnInit(): void {
    this.service.listar()
        .subscribe(res => this.contatos = res);
  }

  novoCadastro(){
    this.router.navigate(['/contatos-form']);
  }
}
