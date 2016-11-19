import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Pacient } from '../../../../interfaces/pacient';
import { Gender } from '../../../../interfaces/gender';
import { DiabetesType } from '../../../../interfaces/diabetesType';

@Component({
  selector: 'add-pacient',
  templateUrl: 'add-pacient.html'
})
export class AddPacientPage {
  public pacient: Pacient = {
    firstName: '',
    lastName: '',
    birthDay: undefined,
    gender: undefined,
    diagnosticDate: undefined,
    diabetesType: undefined
  };

  constructor(public navCtrl: NavController) {

  }

  goToInsulinType() {
    console.log(this.pacient);
  }

}
