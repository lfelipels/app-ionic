import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntregasPage } from './entregas';
import { EntregaFormPage } from '../entrega-form/entrega-form';

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
})
export class EntregasPageModule {}
