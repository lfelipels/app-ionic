import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
    selector: 'page-detalhes-entrega',
    templateUrl: 'detalhes-entrega.html',
})
export class DetalhesEntregaPage {

    public entrega: any;
    map: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
        this.entrega = this.navParams.data.entrega;
        this.getMap();
    }

    ionViewDidLoad() {
        this.getMap();
    }

    private getMap(){
        this.geolocation.getCurrentPosition()
        .then((resp) => {
            const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

            const mapOptions = {
                zoom: 18,
                center: position
            }


            this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

            const marker = new google.maps.Marker({
                position: position,
                map: this.map
            });
            console.log(marker);

        }).catch((error) => {
            console.log('Erro ao recuperar sua posição', error);
        });
    }


    public getEndereco(){
        return this.entrega.endereco + ', ' + this.entrega.cidade + ' - ' + this.entrega.estado;
    }
}
