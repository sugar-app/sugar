import { Component } from '@angular/core';

import { MyInfo } from './info/index';
import { Calculator } from './calculator/index';
import { Graphics } from './graphics/index';

@Component({
  templateUrl: 'pacient.html'
})
export class PacientPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1root: any = MyInfo;
  tab2Root: any = Calculator;
  tab3Root: any = Graphics;

  constructor() {

  }
}
