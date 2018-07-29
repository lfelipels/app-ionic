import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiaristaPage } from './diarista';
import { DiaristaDetalhesPage } from './diarista/detalhes/diarista-detalhes';

@NgModule({
  declarations: [
    DiaristaPage,
    DiaristaDetalhesPage
  ],
  imports: [
    IonicPageModule.forChild(DiaristaPage, DiaristaDetalhesPage),
  ],
})
export class DiaristaPageModule {}
