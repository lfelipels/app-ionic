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

<<<<<<< HEAD
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

=======
>>>>>>> aab5a092c93277c9934b3c71aa78a3ed7e0b5276
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
    selector: 'page-detalhes-entrega',
    templateUrl: 'detalhes-entrega.html',
})
export class DetalhesEntregaPage {

    public entrega: any;
<<<<<<< HEAD

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
                title: 'Ionic',
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

=======

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
>>>>>>> aab5a092c93277c9934b3c71aa78a3ed7e0b5276
        public getEndereco(){
            return this.entrega.endereco + ', ' + this.entrega.cidade + ' - ' + this.entrega.estado;
        }

    }
