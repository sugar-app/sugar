import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Pacient } from '../../../interfaces/pacient';
import { PacientMedicalInfo } from '../../../interfaces/pacientMedicalInfo';
import { InsulinType } from '../../../interfaces/insulinType';

@Component({
  selector: 'my-info',
  templateUrl: 'info.html'
})
export class MyInfoPage {
  public pacient: Pacient = {
      firstName: 'first last',
      lastName: 'whatever',
      birthDay: new Date(),
      gender: 1,
      diagnosticDate: new Date(),
      diabetesType: 1
  };
  public medicalInfo: PacientMedicalInfo = {
    pacient_id: 1,
    basalInsulinType: undefined,
    bolusInsulinType: undefined,
    recommendedDailyCarbohydrates: undefined,
    weight: undefined,
    height: undefined,
    hemoglobinA1C: undefined,
    tamponRates: {
      1: undefined,
      2: undefined,
      3: undefined
    },
    correctionRates: {
      1: undefined,
      2: undefined,
      3: undefined
    }
  };

  public basalInsulinTypes = [
    {id: 0, genericName: 'Gigi'},
    {id: 1, genericName: 'Bularca'}
  ];
  public bolusInsulinTypes = [
    {id: 0, genericName: 'Gigi'},
    {id: 1, genericName: 'Bularca'}
  ];
  constructor(public navCtrl: NavController) {
  }
}
