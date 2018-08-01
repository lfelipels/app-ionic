import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfissionalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfissionalProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProfissionalProvider Provider');
  }

  index(){
    return this.http.get('http://diaristas-api.local/api/v1/profissionais');    
  }

}
