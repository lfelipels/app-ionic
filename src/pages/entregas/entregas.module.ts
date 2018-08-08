import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntregasPage } from './entregas';
import { EntregaFormPage } from '../entrega-form/entrega-form';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    EntregasPage, EntregaFormPage
  ],
  entryComponents: [
    EntregaFormPage
  ],
  imports: [
    IonicPageModule.forChild(EntregasPage),
  ],
  providers:[
      Camera
  ]
})
export class EntregasPageModule {}
