import { Injectable } from '@angular/core';
import { Contato } from './contatos/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  agendaId = 1;

  constructor( private http : HttpClient) {

  }

  salvar(contato : Contato) : Observable<Contato> {
    return this.http.post<Contato>('http://localhost/mobit-rest-1.0/api/v1/contatos/'+this.agendaId, contato);
  }

  findById(contato : Contato) : Observable<Contato>{
    return this.http.get<Contato>
      ('http://localhost/mobit-rest-1.0/api/v1/contatos/'+this.agendaId+'/'+contato.id, contato);
  }

  getContatos() : Contato {
    let contato = new Contato();
    contato.nome = 'Robson App';
    contato.agenda_id = 1;
    return contato;
  }
}
