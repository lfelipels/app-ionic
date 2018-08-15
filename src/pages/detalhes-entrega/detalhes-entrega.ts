import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,
    CameraPosition,
    MarkerOptions,
    Marker
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
    selector: 'page-detalhes-entrega',
    templateUrl: 'detalhes-entrega.html',
})
export class DetalhesEntregaPage {

    public entrega: any;

    map: GoogleMap;

    constructor(
        public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
            this.entrega = this.navParams.data.entrega;
        }

        ionViewDidLoad() {
            this.loadMap();
        }
        loadMap() {

            let mapOptions: GoogleMapOptions = {
                camera: {
                    target: {
                        lat: 43.0741904,
                        lng: -89.3809802
                    },
                    zoom: 18,
                    tilt: 30
                }
            };

            this.map = GoogleMaps.create('map_canvas', mapOptions);
            console.log('vdhvjhvjv');
        }
        public getEndereco(){
            return this.entrega.endereco + ', ' + this.entrega.cidade + ' - ' + this.entrega.estado;
        }

    }
