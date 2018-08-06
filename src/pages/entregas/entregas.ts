import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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

  public entregas: Array<any> = [
      {id: 1, nome: 'Pacote 01', img: '../assets/imgs/logo.png', data_entrega: '2019-02-15', hora_entrega: '08:00', estado: 'CE', cidade: 'Redenção', cep: '62790-000', endereco: 'Alto do Bode', confirmada: false},
      {id: 2, nome: 'Pacote 02', img: '../assets/imgs/logo.png', data_entrega: '2019-02-15', hora_entrega: '08:00', estado: 'CE', cidade: 'Redenção', cep: '62790-000', endereco: 'Alto do Bode', confirmada: false},
      {id: 3, nome: 'Pacote 03', img: '../assets/imgs/logo.png', data_entrega: '2019-02-15', hora_entrega: '08:00', estado: 'CE', cidade: 'Redenção', cep: '62790-000', endereco: 'Alto do Bode', confirmada: false},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private modalCtrl: ModalController,private entregaProvider: EntregaProvider) {
      this.index();
  }

  index(){
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

  remover(pacote){

  }

  confirmarEntrega(entrega){
      entrega.confirmada = !entrega.confirmada;
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
                  this.status = data.status;
                  this.message = data.message;
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
  }

}
