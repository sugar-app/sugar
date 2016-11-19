import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Pacient } from '../../../../interfaces/pacient';

@Component({
  selector: 'add-pacient',
  templateUrl: 'add-pacient.html'
})
export class AddPacientPage {
  public pacient: Pacient = {
    firstName: '',
    lastName: '',
    birthDate: undefined,
    gender: undefined,
    diagnosticDate: undefined,
    diabetesType: undefined
  };

  constructor(public navCtrl: NavController) {

  }

  registerPacient() {
    console.log(this.pacient);
  }

}
