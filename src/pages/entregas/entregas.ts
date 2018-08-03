import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EntregaFormPage} from '../entrega-form/entrega-form';
import {EntregaProvider} from '../../providers/entrega/entrega';

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
  public titulo: string = 'Lista de entrega a realizar'

  public entregas: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private entregaProvider: EntregaProvider) {
      this.index();
  }

  index(){
      this.entregaProvider.index()
      .then((dados: any[]) => {
          console.log(dados);
          this.entregas = dados;
      });
  }

  adicionar(){
    this.navCtrl.push(EntregaFormPage);
  }

  remover(pacote){

  }

  confirmarEntrega(entrega){
      entrega.confirmada = !entrega.confirmada;
  }

  editar(entrega){
      this.navCtrl.push(EntregaFormPage, {"entrega":entrega});
  }

  mostrarDetalhes(entrega){

  }

  ionViewDidLoad() {
  }

}
