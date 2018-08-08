import { Injectable } from '@angular/core';

import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';


export class Entrega  {
    nome: string = '';
    img: string = '';
    data_entrega : string = '';
    hora_entrega: string = '';
    estado: string = '';
    cidade: string = '';
    cep: string = '';
    endereco: string = '';
    confirmada: number = 0;
};

/*
  Generated class for the EntregaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EntregaProvider {

  constructor(public dbProvider: DatabaseProvider) { }

  public salvar(entrega){
      if(entrega.id && entrega.id != ''){
          return this.atualizar(entrega);
      }else{
          return this.cadastrar(entrega);
      }
  }

  public index(){
      return this.dbProvider.getDB()
     .then((db: SQLiteObject) => {
         let sql = 'SELECT * from entregas';
         return db.executeSql(sql, [])
         .then((data: any) => {
            if (data.rows.length > 0) {
                 let entregas: any[] = [];
                 for (var i = 0; i < data.rows.length; i++) {
                   var entrega = data.rows.item(i);
                   entregas.push(entrega);
                 }
                 return entregas;
            } else {
               return [];
            }
         });
     });
  }

  private cadastrar(entrega){
      return this.dbProvider.getDB()
       .then((db: SQLiteObject) => {
         let sql = 'insert into entregas (nome, img, data_entrega, hora_entrega, estado, cidade, cep, endereco, confirmada) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';
         let data = [entrega.nome, entrega.img, entrega.data_entrega, entrega.hora_entrega, entrega.estado, entrega.cidade, entrega.cep, entrega.endereco, entrega.confirmada];
         return db.executeSql(sql, data);
       });
  }

  private atualizar(entrega){
      return this.dbProvider.getDB()
       .then((db: SQLiteObject) => {
         let sql = 'update entregas set nome = ?, img = ?, data_entrega = ?, hora_entrega = ?, estado = ?, cidade = ?, cep = ?, endereco = ?, confirmada = ? where id = ?';
         let data = [entrega.nome, entrega.img, entrega.data_entrega, entrega.hora_entrega, entrega.estado, entrega.cidade, entrega.cep, entrega.endereco, entrega.confirmada, entrega.id];
         return db.executeSql(sql, data);
       });
  }

  public excluir(id: number) {
      console.log({'id excluido': id});
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from entregas where id = ?';
        let data = [id];
        return db.executeSql(sql, data);
      });
  }
}
