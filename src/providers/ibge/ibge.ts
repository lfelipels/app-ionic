import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IbgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IbgeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IbgeProvider Provider');
  }

  getEstados(){
      return [
          {"sigla":"RO","nome":"Rondônia"},
          {"sigla":"AC","nome":"Acre"},
          {"sigla":"AM","nome":"Amazonas"},
          {"sigla":"RR","nome":"Roraima"},
          {"sigla":"PA","nome":"Pará"},
          {"sigla":"AP","nome":"Amapá"},
          {"sigla":"TO","nome":"Tocantins"},
          {"sigla":"MA","nome":"Maranhão"},
          {"sigla":"PI","nome":"Piauí"},
          {"sigla":"CE","nome":"Ceará"},
          {"sigla":"RN","nome":"Rio Grande do Norte"},
          {"sigla":"PB","nome":"Paraíba"},
          {"sigla":"PE","nome":"Pernambuco"},
          {"sigla":"AL","nome":"Alagoas"},
          {"sigla":"SE","nome":"Sergipe"},
          {"sigla":"BA","nome":"Bahia"},
          {"sigla":"MG","nome":"Minas Gerais"},
          {"sigla":"ES","nome":"Espírito Santo"},
          {"sigla":"RJ","nome":"Rio de Janeiro"},
          {"sigla":"SP","nome":"São Paulo"},
          {"sigla":"PR","nome":"Paraná"},
          {"sigla":"SC","nome":"Santa Catarina"},
          {"sigla":"RS","nome":"Rio Grande do Sul"},
          {"sigla":"MS","nome":"Mato Grosso do Sul"},
          {"sigla":"MT","nome":"Mato Grosso"},
          {"sigla":"GO","nome":"Goiás"},
          {"sigla":"DF","nome":"Distrito Federal"}
      ];
  }
}
