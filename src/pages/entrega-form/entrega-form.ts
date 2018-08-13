import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { IbgeProvider } from '../../providers/ibge/ibge'
import { EntregaProvider, Entrega } from '../../providers/entrega/entrega'

@Component({
    selector: 'page-entrega-form',
    templateUrl: 'entrega-form.html',
})
export class EntregaFormPage {

    public titulo: string = 'Cadastrar nova entrega';
    public entrega: any = null;
    public estados: Array<any> = [];
    public imagem: string = './assets/imgs/camera.png';

    constructor(
        public navCtrl: NavController, public navParams: NavParams,
        private viewCtrl: ViewController, private loadingCtrl: LoadingController,
        private camera: Camera, private alertCtrl: AlertController,
        private ibgeProvider: IbgeProvider, private entregaProvider: EntregaProvider
    ) {
        this.carregarEstados();

        //verifica se foi passado alguma entrega para atualização
        if(this.viewCtrl.data.entrega && this.viewCtrl.data.entrega.id){
            this.entrega = this.viewCtrl.data.entrega;
            this.imagem = this.entrega.img;
            this.titulo  = "Editando a entrega " + this.viewCtrl.data.entrega.nome;
        }
        else{
            this.entrega = new Entrega;
        }
    }

    public tirarFoto(){
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options)
        .then((imageData) => {
            this.imagem = 'data:image/jpeg;base64,' + imageData;
            console.log(this.imagem);
        }, (err) => {
            console.error('Erro ao tirar a foto', err);
        });
    }


    private mostrarMensagem(titulo, mensagem){
        const alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensagem,
            buttons: ['OK']
        });
        alert.present();
    }

    /**
    * Carrega os estados
    */
    carregarEstados(){
        this.estados = this.ibgeProvider.getEstados();
    }

    salvar(){
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
            this.mostrarMensagem('Falha na operação', 'Erro ao salvar os dados');
        });
    }

    fecharModal(data){
        this.viewCtrl.dismiss(data);
    }


    ionViewDidLoad() {
}

}
