import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DiaristaDetalhesPage} from './diarista-detalhes/diarista-detalhes';

/**
 * Generated class for the DiaristaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diarista',
  templateUrl: 'diarista.html',
})
export class DiaristaPage {

    public diaristas: any = [
        {nome: 'Fulana 01', nascimento: '01-09-1993', resumo: '', telefone:'',  localizacao: 'Aproximadamente 2km', foto: '../assets/imgs/logo.png'},
        {nome: 'Fulana 02', nascimento: '01-09-1993', resumo: '', telefone:'',  localizacao: 'Aproximadamente 2km', foto: '../assets/imgs/logo.png'},
        {nome: 'Fulana 03', nascimento: '01-09-1993', resumo: '', telefone:'',  localizacao: 'Aproximadamente 2km', foto: '../assets/imgs/logo.png'},
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  // mostra os detalhes de uma diarista
  mostrarDetalhes(diarista){
      this.navCtrl.push(DiaristaDetalhesPage, {'diarista': diarista});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaristaPage');
  }

}
