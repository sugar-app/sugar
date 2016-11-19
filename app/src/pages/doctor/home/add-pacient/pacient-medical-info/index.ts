import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { PacientMedicalInfo } from '../../../../../interfaces/pacientMedicalInfo';
import { InsulinType } from '../../../../interfaces/insulinType';
import { Pacient } from '../../../../../interfaces/pacient';

@Component({
  selector: 'medical-info',
  templateUrl: 'medical-info.html'
})
export class MedicalInfoPage {
  public medicalInfo: PacientMedicalInfo = {
    pacient_id: 1,
    basalInsulinType: undefined,
    bolusInsulinType: undefined,
    recommendedDailyCarbohydrates: undefined,
    weight: undefined,
    height: undefined,
    hemoglobinA1C: undefined,
    tamponRates: undefined,
    correctionRates: undefined
  };

  public pacientInfo: Pacient;

  public basalInsulinTypes = [
    {id: 0, genericName: 'Gigi'},
    {id: 1, genericName: 'Bularca'}
  ];
  public bolusInsulinTypes = [
    {id: 0, genericName: 'Gigi'},
    {id: 1, genericName: 'Bularca'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pacientInfo = navParams.get('pacientInfo');
  }

  savePacient() {
  }

}
