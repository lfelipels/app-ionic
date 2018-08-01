import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DiaristaDetalhesPage} from './diarista-detalhes/diarista-detalhes';

import {ProfissionalProvider} from '../../providers/profissional/profissional';

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

    public diaristas: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ProfissionalProvider) {
      this.diaristas = this.service.index();
  }
  // mostra os detalhes de uma diarista
  mostrarDetalhes(diarista){
      this.navCtrl.push(DiaristaDetalhesPage, {'diarista': diarista});
  }

  ionViewDidLoad() {
  }

}
