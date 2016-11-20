import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { MedicalInfoPage } from './pacient-medical-info';

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
  public addMedicalInfo: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToMedicalInfo() {
    var data = {pacientInfo: this.pacient}
    this.navCtrl.push(MedicalInfoPage, data);
  }

}
