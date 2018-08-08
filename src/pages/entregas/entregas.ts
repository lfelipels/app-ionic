import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

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

  public status: string = '';
  public message: string = '';

  public entregas: Array<any> = [];

  constructor(
      public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
      private modalCtrl: ModalController,private entregaProvider: EntregaProvider) {
  }

  public index(){
      this.entregaProvider.index()
      .then((dados: any[]) => {
          console.log(dados);
          this.entregas = dados;
      }).catch((e) => {
          console.error('está dando erro', e)
      });
  }

  adicionar(){
     this.abrirModal(EntregaFormPage, null, true);
  }

  private mostrarMensagem(titulo, mensagem){
      const alert = this.alertCtrl.create({
          title: titulo,
          subTitle: mensagem,
          buttons: ['OK']
      });
      alert.present();
  }

  remover(id){
      const confirm = this.alertCtrl.create({
          title: 'Excluir uma entrega',
          message: "Deseja realmente realizar esta operação?",
          buttons: [
              {
                  text: 'Cancelar',
                  handler: () => {}
              },
              {
                  text: 'Confirmar',
                  handler: () => {
                      this.excluir(id);
                  }
              }
          ]
      });
      confirm.present();
  }

  private excluir(id){
      this.entregaProvider.excluir(id)
      .then((resultado)=>{;
          this.mostrarMensagem('Excluir entrega', 'Operação realizada com sucesso!');
          this.index();
      })
      .catch((e)=> console.error('Não foi possivel excluir o registro.', e));
  }

  editar(entrega){
      this.abrirModal(EntregaFormPage,  {'entrega': entrega}, true);
  }

  abrirModal(page, data, response){
      data = data !== null && typeof data === 'object'? data : null;
      response = response !== null && typeof response === 'boolean'? response : false;

      let modal = this.modalCtrl.create(page, data);
      if(response){
          modal.onDidDismiss(data => {
              if(data){
                  this.mostrarMensagem('', data.message);
                  if(data.status == 'success'){
                      this.index();
                  }
              }
          });
      }
      modal.present();
  }
  mostrarDetalhes(entrega){

  }

  ionViewDidLoad() {
      this.index();
  }

}
