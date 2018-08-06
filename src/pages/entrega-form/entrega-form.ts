import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { IbgeProvider } from '../../providers/ibge/ibge'
import { EntregaProvider, Entrega } from '../../providers/entrega/entrega'

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
  public entrega: any = null;
  public estados: Array<any> = [];
  public cidades: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private viewCtrl: ViewController, private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      private ibgeProvider: IbgeProvider, private entregaProvider: EntregaProvider) {
      this.carregarEstados();

      //verifica se foi passado alguma entrega para atualização
      if(this.viewCtrl.data.entrega && this.viewCtrl.data.entrega.id){
          this.entrega = this.viewCtrl.data.entrega
      }
      else{
          this.entrega = new Entrega;
      }
  }

  mostrarMsg(msg){
      const toast = this.toastCtrl.create({
          message: msg,
          duration: 3000
      });
      toast.present();
  }

  /**
  * Carrega os estados
  */
  carregarEstados(){
      this.estados = this.ibgeProvider.getEstados();
  }

  salvar(){
      let loading = this.loadingCtrl.create({ content: "Salvando o registro, por favor aguarde..." });
      loading.present();

      this.entregaProvider.salvar(this.entrega)
      .then((response)=>{
          setInterval(() => {
              loading.dismissAll();
          }, 5000);
          this.fecharModal({status: 'success', messagem: 'Registro salvo com sucesso!'});
      }).catch((error)=>{
           //error
           setInterval(() => {
               loading.dismissAll();
           }, 5000);

           mostrarMsg('')
      });
  }

  fecharModal(data){
      this.viewCtrl.dismiss(data);
  }


  ionViewDidLoad() {
  }

}
