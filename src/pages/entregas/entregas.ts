import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController,
        ActionSheetController, Platform } from 'ionic-angular';
//pages
import {EntregaFormPage} from '../entrega-form/entrega-form';
import { DetalhesEntregaPage } from '../detalhes-entrega/detalhes-entrega';
//providers
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
        {id: 1, nome: 'Pacote 01', img: '../../assets/imgs/logo2.png', data_entrega: '2018-05-20', hora_entrega: '10:30', estado: 'CE', cidade: 'Acarape', cep: '62790-000', endereco: 'Rua Seis, 100', confirmada: 0},
        {id: 2, nome: 'Pacote 02', img: '../../assets/imgs/logo2.png', data_entrega: '2018-06-05', hora_entrega: '10:30', estado: 'CE', cidade: 'Acarape', cep: '62790-000', endereco: 'Rua Seis, 100', confirmada: 0},
        {id: 3, nome: 'Pacote 03', img: '../../assets/imgs/logo2.png', data_entrega: '2018-06-08', hora_entrega: '10:30', estado: 'CE', cidade: 'Acarape', cep: '62790-000', endereco: 'Rua Seis, 100', confirmada: 0},
        {id: 4, nome: 'Pacote 04', img: '../../assets/imgs/logo2.png', data_entrega: '2018-08-11', hora_entrega: '10:30', estado: 'CE', cidade: 'Acarape', cep: '62790-000', endereco: 'Rua Seis, 100', confirmada: 0},
        {id: 5, nome: 'Pacote 05', img: '../../assets/imgs/logo2.png', data_entrega: '2018-08-20', hora_entrega: '10:30', estado: 'CE', cidade: 'Acarape', cep: '62790-000', endereco: 'Rua Seis, 100', confirmada: 0},
        {id: 6, nome: 'Pacote 06', img: '../../assets/imgs/logo2.png', data_entrega: '2018-09-25', hora_entrega: '10:30', estado: 'CE', cidade: 'Acarape', cep: '62790-000', endereco: 'Rua Seis, 100', confirmada: 0},
    ];

    constructor(
        public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
        private actionsCtrl: ActionSheetController, private modalCtrl: ModalController,
        public platform: Platform, private entregaProvider: EntregaProvider) {}

        public index(){
            this.entregaProvider.index()
            .then((dados: any[]) => {
                console.log(dados);
                this.entregas = dados;
            }).catch((e) => {
                console.error('está dando erro', e)
            });
        }

        public mostrarAcoes(entrega) {
            const actionSheet = this.actionsCtrl.create({
                title: entrega.nome,
                cssClass: 'action-sheets-entregas-page',
                buttons: [
                    {
                        text: 'Deletar',
                        role: 'deletar',
                        icon: !this.platform.is('ios') ? 'trash' : null,
                        handler: () =>{
                            this.remover(entrega.id);
                        }
                    },
                    {
                        text: 'Editar',
                        icon: !this.platform.is('ios') ? 'create' : null,
                        handler: () => {
                            this.editar(entrega);
                        }
                    },
                    {
                        text: 'Detalhes',
                        icon: !this.platform.is('ios') ? 'eye' : null,
                        handler: () => {
                            this.mostrarDetalhes(entrega);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancelar', // will always sort to be on the bottom
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: () => { }
                    }
                ]

            });
            actionSheet.present();
        }


        public adicionar(){
            this.abrirModal(EntregaFormPage, null, true);
        }
        public remover(id){
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
        public editar(entrega){
            this.abrirModal(EntregaFormPage,  {'entrega': entrega}, true);
        }
        public mostrarDetalhes(entrega){
            this.navCtrl.push(DetalhesEntregaPage, {'entrega': entrega});
        }

        private mostrarMensagem(titulo, mensagem){
            const alert = this.alertCtrl.create({
                title: titulo,
                subTitle: mensagem,
                buttons: ['OK']
            });
            alert.present();
        }
        private excluir(id){
            this.entregaProvider.excluir(id)
            .then((resultado)=>{;
                this.mostrarMensagem('Excluir entrega', 'Operação realizada com sucesso!');
                this.index();
            })
            .catch((e)=> console.error('Não foi possivel excluir o registro.', e));
        }
        private abrirModal(page, data, response){
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

        ionViewDidLoad() {
            this.index();
        }

    }
