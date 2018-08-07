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
  public errors: Array<any> = [];

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
          duration: 3000,
          position: 'top',
          // showCloseButton: true,
          // closeButtonText: 'Ok',
      });
      toast.present();
  }

  /**
  * Carrega os estados
  */
  carregarEstados(){
      this.estados = this.ibgeProvider.getEstados();
  }
public i = 0;
  salvar(){ this.i++;

      this.errors = [];
      let loading = this.loadingCtrl.create({
          content: "Salvando o registro, por favor aguarde...",
          duration: 3000,
          dismissOnPageChange: true
      });
      loading.present();

      this.entregaProvider.salvar(this.entrega)
      .then((response)=>{
          this.fecharModal({status: 'success', message: 'Registro salvo com sucesso!'});
      }).catch((error)=>{
           //error
           this.errors.push({status: 'fails', message: 'Erro ao salvar os dados!'});
      });
  }

  fecharModal(data){
      this.viewCtrl.dismiss(data);
  }


  ionViewDidLoad() {
  }

}
