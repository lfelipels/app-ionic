import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DiaristaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-diarista-detalhes',
  templateUrl: 'diarista-detalhes.html',
})
export class DiaristaDetalhesPage {

    public diarista: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  calcularIdade(): number{
      let data = this.diarista.nascimento.split('/');
      return new Date().getFullYear() - data[2];
  }

  ionViewDidLoad() {
      this.diarista = this.params.get('diarista');
      console.log('ionViewDidLoad DiaristaPage');
  }

}
