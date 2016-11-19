import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {HomePage} from '../doctor/home/home';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private navCtrl: NavController;

  constructor(navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  goToDoctor() {
    this.navCtrl.setRoot(HomePage);
  }
}
