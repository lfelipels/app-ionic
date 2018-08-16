import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EntregasPage } from './entregas';
import { EntregaFormPage } from '../entrega-form/entrega-form';
import { DetalhesEntregaPage } from '../detalhes-entrega/detalhes-entrega';

import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from "@ionic-native/google-maps";
<<<<<<< HEAD
import { NativeGeocoder} from '@ionic-native/native-geocoder';
=======

>>>>>>> aab5a092c93277c9934b3c71aa78a3ed7e0b5276

import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    EntregasPage, EntregaFormPage, DetalhesEntregaPage
  ],
  entryComponents: [
    EntregaFormPage, DetalhesEntregaPage
  ],
  imports: [
    IonicPageModule.forChild(EntregasPage),
  ],
  providers:[
<<<<<<< HEAD
      Camera, Geolocation, GoogleMaps, NativeGeocoder
=======
      Camera, Geolocation, GoogleMaps      
>>>>>>> aab5a092c93277c9934b3c71aa78a3ed7e0b5276
  ]
})
export class EntregasPageModule {}
