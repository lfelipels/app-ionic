import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EntregasPage } from './entregas';
import { EntregaFormPage } from '../entrega-form/entrega-form';
import { DetalhesEntregaPage } from '../detalhes-entrega/detalhes-entrega';

import { Geolocation } from '@ionic-native/geolocation';


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
      Camera, Geolocation      
  ]
})
export class EntregasPageModule {}
