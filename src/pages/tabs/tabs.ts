import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DiaristaPage } from '../diarista/diarista';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = DiaristaPage;

  constructor() {

  }
}
