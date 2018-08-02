import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EntregaFormPage} from '../entrega-form/entrega-form';

/**
 * Generated class for the EntregasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entregas',
  templateUrl: 'entregas.html',
})
export class EntregasPage {
  public titulo: string = 'Pacotes para entrega'

  public pacotes: Array<any> = [
    {nome: 'Pacote 01', img: '../../assets/imgs/logo.png', data_entrega : '10/10/2018', hora_entrega: '10:00', estado: 'CE', cidade: 'Redenção', cep: '62790-000', endereco: 'Rua 01'},
    {nome: 'Pacote 02', img: '../../assets/imgs/logo.png', data_entrega : '11/10/2018', hora_entrega: '10:00', estado: 'CE', cidade: 'Redenção', cep: '62790-000', endereco: 'Rua 01'},
    {nome: 'Pacote 03', img: '../../assets/imgs/logo.png', data_entrega : '05/10/2018', hora_entrega: '10:00', estado: 'CE', cidade: 'Redenção', cep: '62790-000', endereco: 'Rua 01'},
    {nome: 'Pacote 04', img: '../../assets/imgs/logo.png', data_entrega : '02/09/2018', hora_entrega: '10:00', estado: 'CE', cidade: 'Redenção', cep: '62790-000', endereco: 'Rua 01'},

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  adicionar(){
    this.navCtrl.push(EntregaFormPage);
  }

  remover(pacote){

  }

  editar(pacote){

  }

  mostrarDetalhes(pacote){

  }

  ionViewDidLoad() {
  }

}
