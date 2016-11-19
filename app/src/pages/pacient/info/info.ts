import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'my-info',
  templateUrl: 'info.html'
})
export class MyInfo {
  constructor(public navCtrl: NavController) {
  }
}
