import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { IbgeProvider } from '../../providers/ibge/ibge'
import { EntregaProvider, Entrega } from '../../providers/entrega/entrega'
=======
import { IbgeProvider } from '../providers/database/database'
>>>>>>> 0437420d04a92ba987d754374bc31768d6894cac

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

<<<<<<< HEAD
  public entrega: any = null;
  public estados: Array<any> = [];
  public cidades: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private ibgeProvider: IbgeProvider, private entregaProvider: EntregaProvider) {
      this.carregarEstados();

      //verifica se foi passado alguma entrega para atualização
      if(this.navParams.data.entrega && this.navParams.data.entrega.id){
          this.entrega = this.navParams.data.entrega
      }
      else{
          this.entrega = new Entrega;
      }
  }
  /**
  * Carrega os estados
  */
  carregarEstados(){
      this.estados = this.ibgeProvider.getEstados();
=======
  public estados: Array<any> = [];
  public cidades: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ibgeProvider: IbgeProvider) {
      this.carregarEstados();
  }

  carregarEstados(){
      this.estados = ibgeProvider.getEstados();
>>>>>>> 0437420d04a92ba987d754374bc31768d6894cac
  }

  salvar(){
      let rs = this.entregaProvider.salvar(this.entrega);
      console.log(rs)
      // .then((response)=>{
      //     console.log(response);
      // }).catch((error)=>{
      //      console.error('Não foi possivel savar o registro.', error);
      // });
  }

  ionViewDidLoad() {
  }

}
