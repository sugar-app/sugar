import { Component } from '@angular/core';

import { MyInfo } from './info/info';
import { Calculator } from './calculator/calculator';
import { Graphics } from './graphics/graphics';

@Component({
  templateUrl: 'pacient.html'
})
export class PacientPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyInfo;
  tab2Root: any = Calculator;
  tab3Root: any = Graphics;

  constructor() {
    console.log('pula mea')
  }
}
