import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'calculator',
  templateUrl: 'calculator.html'
})
export class Calculator {
  constructor(public navCtrl: NavController) {
  }
}
