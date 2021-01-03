import { EmailValidator } from "@angular/forms";

export class Contato {
  id: number;
  agenda_id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  email: string;
  end_logradoutro: string;
  end_bairro: string;
  end_cidade: string;
  end_numero: string;
  end_cep: number;
  end_uf: string;
}
