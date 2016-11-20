import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController} from 'ionic-angular';

import {HomePage} from '../doctor/home/home';
import {PacientPage} from '../pacient/';
import {UserLoginModal} from '../../modals/user-login';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private navCtrl: NavController;
  private modals: ModalController;

  constructor(navCtrl: NavController, modals: ModalController) {
    this.navCtrl = navCtrl;
    this.modals = modals;
  }

  goToDoctor() {
    this.navCtrl.setRoot(HomePage);
  }

  goToPacient() {
    let modal = this.modals.create(UserLoginModal);
    modal.present();
  }
}
