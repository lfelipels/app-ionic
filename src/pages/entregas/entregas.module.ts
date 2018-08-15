import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EntregasPage } from './entregas';
import { EntregaFormPage } from '../entrega-form/entrega-form';
import { DetalhesEntregaPage } from '../detalhes-entrega/detalhes-entrega';

import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from "@ionic-native/google-maps";
import { NativeGeocoder} from '@ionic-native/native-geocoder';

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
      Camera, Geolocation, GoogleMaps, NativeGeocoder
  ]
})
export class EntregasPageModule {}
