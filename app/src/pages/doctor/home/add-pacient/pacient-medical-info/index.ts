import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { PacientMedicalInfo } from '../../../../../interfaces/pacientMedicalInfo';
import { InsulinType } from '../../../../interfaces/insulinType';
import { Pacient } from '../../../../../interfaces/pacient';

import { PacientService } from '../../../../../services/pacient';

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

  public pacientInfo: Pacient;

  public basalInsulinTypes = [
    {id: 0, genericName: 'Detemir'},
    {id: 1, genericName: 'Glargin'}
  ];
  public bolusInsulinTypes = [
    {id: 0, genericName: 'Lispro'},
    {id: 1, genericName: 'Aspart'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pacientService: PacientService) {
    this.pacientInfo = navParams.get('pacientInfo');
  }

  savePacient() {
    this.pacientInfo.medicalInfo = this.medicalInfo;
    console.log(this.pacientInfo);
    this.pacientService.createPacient(this.pacientInfo).subscribe(console.log, console.error);
    console.log('trying to create');
  }

}
