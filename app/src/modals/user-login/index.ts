import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { PacientPage } from '../../pages/pacient';

@Component({
  selector: 'user-login-modal',
  templateUrl: 'user-login.html'
})
export class UserLoginModal {
  userId: string = '';

  constructor(private navCtrl: NavController, private viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goToPacient(id) {
    this.navCtrl.setRoot(PacientPage, {pacientId: id});
  }
}
