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

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

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
        public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
            this.entrega = this.navParams.data.entrega;
        }

        ionViewDidLoad() {
            this.getLocal();
        }

        loadMap(latitude, longitude) {

            let mapOptions: GoogleMapOptions = {
                camera: {
                    target: {
                        lat: latitude,
                        lng: longitude
                    },
                    zoom: 18,
                    tilt: 30
                }
            };

            this.map = GoogleMaps.create('map_canvas', mapOptions);

            let marker: Marker = this.map.addMarkerSync({
                title: 'Local de En',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: latitude,
                    lng: longitude
                }
            });
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                alert('clicked');
            });
        }


        private getLocal(){
            let options: NativeGeocoderOptions = {
                useLocale: true,
                maxResults: 5
            };

            this.nativeGeocoder.forwardGeocode(this.getEndereco(), options)
            .then((coordinates: NativeGeocoderForwardResult[]) => this.loadMap(coordinates[0].latitude, coordinates[0].longitude))
            .catch((error: any) => console.log(error));
        }

        public getEndereco(){
            return this.entrega.endereco + ', ' + this.entrega.cidade + ' - ' + this.entrega.estado;
        }

    }
