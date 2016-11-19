import { Component } from '@angular/core';

import { MyInfoPage } from './info/info';
import { CalculatorPage } from './calculator/calculator';
import { GraphicsPage } from './graphics/graphics';

@Component({
  templateUrl: 'pacient.html'
})
export class PacientPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyInfoPage;
  tab2Root: any = CalculatorPage;
  tab3Root: any = GraphicsPage;

  constructor() {
    console.log('pula mea')
  }
}
