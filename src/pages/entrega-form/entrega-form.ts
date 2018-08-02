import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntregaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-entrega-form',
  templateUrl: 'entrega-form.html',
})
export class EntregaFormPage {
  public titulo: string = 'Cadastrar nova entrega';
  public pacote: any = {nome: '', img: '', data_entrega : '', hora_entrega: '', estado: '', cidade: '', cep: '', endereco: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  salvar(){
    console.log('salvando pacote...');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntregaFormPage');
  }

}
