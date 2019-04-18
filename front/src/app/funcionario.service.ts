import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  uri = '/funcionario';
  constructor(private http: HttpClient) { }

  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    const objFuncionario = {
      nomeFuncionario,
      cargo,
      numeroIdentificador
    };

    console.log(objFuncionario);
    this.http.post(`${this.uri}/add`, objFuncionario)
      .subscribe(res => console.log('Ok'));
  }
}
