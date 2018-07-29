import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {DiaristaDetalhesPage} from './detalhes/diarista-detalhes';

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
        {nome: 'Fulana 01', nascimento: '', resumo: '', telefone:'',  localizacao: 'Aproximadamente 2km', foto: '../assets/imgs/logo.png'},
        {nome: 'Fulana 02', nascimento: '', resumo: '', telefone:'',  localizacao: 'Aproximadamente 2km', foto: '../assets/imgs/logo.png'},
        {nome: 'Fulana 03', nascimento: '', resumo: '', telefone:'',  localizacao: 'Aproximadamente 2km', foto: '../assets/imgs/logo.png'},
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  detalhes(diarista){
      const modal = this.modalCtrl.create(DiaristaDetalhesPage);
      modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaristaPage');
  }

}
