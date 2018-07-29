import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DiaristaDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-diarista-detalhes',
  templateUrl: 'diarista-detalhes.html',
})
export class DiaristaDetalhesPage {

    public diarista: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      //recebe a diarista passada por parametro
      this.diarista = this.navParams.get('diarista')
      console.log(this.diarista.nome);
  }

  calcularIdade() : integer{
      let data = this.diarista.nascimento.split('/');
      return new Date().getFullYear() - data[2];
  }

  ngAfterViewInit(){

  }
  ionViewDidLoad() {
      // //recebe a diarista passada por parametro
      // this.diarista = this.navParams.data.diarista
      // console.log(this.diarista);
  }

}
