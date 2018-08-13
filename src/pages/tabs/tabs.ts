import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EntregasPage } from '../entregas/entregas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  tab2Root = EntregasPage;

  constructor() {

  }
}
