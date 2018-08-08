import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {}

  // Cria o banco de dados
  public getDB(){
    return this.sqlite.create({
      name: 'entregas.db',
      location: 'default'
    });
  }

  /**
   * Cria a estrutura inicial do banco de dados
   */
  public createDatabase() {
    //pega  banco
    return this.getDB()
      .then((db: SQLiteObject) => {
          console.log('banco criando com sucesso.');
        // Criando as tabelas
        this.createTables(db);
        // Inserindo dados padrão
        this.insertDefaultItems(db);
      }).catch(e => console.log(e));
  }

    /**
    * Criando as tabelas no banco de dados
    * @param db
    */
    private createTables(db: SQLiteObject) {
      // Criando as tabelas
      console.log('Criando as tabelas.');
      db.sqlBatch([
          ['CREATE TABLE IF NOT EXISTS entregas (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT, data_entrega TEXT, hora_entrega TEXT, estado TEXT, cidade TEXT, cep TEXT, endereco TEXT, confirmada integer, img TEXT)']
      ])
      .then(() => console.log('Tabelas criadas com sucesso.'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
    }

      /**
      * Incluindo os dados padrões
      * @param db
      */
      private insertDefaultItems(db: SQLiteObject) {
          db.executeSql('select COUNT(id) as qtd from entregas', [])
          .then((data: any) => {
              //Se não existe nenhum registro
              if (data.rows.item(0).qtd == 0) {
              // Criando as tabelas
                db.sqlBatch([
                    ['insert into entregas (nome, img, data_entrega, hora_entrega, estado, cidade, cep, endereco, confirmada) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    ['Pacote 01', 'logo.png', '2019-02-15', '08:00', 'CE', 'Redenção', '62790-000', 'Rua 01', 0]],
                    ['insert into entregas (nome, img, data_entrega, hora_entrega, estado, cidade, cep, endereco, confirmada) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    ['Pacote 02', 'logo.png', '2019-02-15', '08:00', 'CE', 'Acarape', '62790-000', 'Rua 02', 0]],
                    ['insert into entregas (nome, img, data_entrega, hora_entrega, estado, cidade, cep, endereco, confirmada) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    ['Pacote 03', 'logo.png', '2019-02-15', '08:00', 'CE', 'Redenção', '62790-000', 'Rua 03', 0]]
                ])
                .then(() => console.log('Dados padrões incluídos'))
                .catch(e => console.error('Erro ao incluir dados padrões', e));
            }
        }).catch(e => console.error('Erro ao consultar a qtd de entregas', e));
    }
}
