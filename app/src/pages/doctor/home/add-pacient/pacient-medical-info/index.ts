import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';

import { PacientMedicalInfo } from '../../../../../interfaces/pacientMedicalInfo';
import { Pacient } from '../../../../../interfaces/pacient';
import { PacientPage } from '../../../../pacient';

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
    {id: 4, genericName: 'Detemir'},
    {id: 5, genericName: 'Glargin'}
  ];
  public bolusInsulinTypes = [
    {id: 6, genericName: 'Lispro'},
    {id: 7, genericName: 'Aspart'}
  ];
  loadingCtrl: LoadingController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pacientService: PacientService, loadingCtrl: LoadingController) {
    this.pacientInfo = navParams.get('pacientInfo');
    this.loadingCtrl = loadingCtrl;
  }

  savePacient() {
    var loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loader.present();
    this.pacientInfo.medicalInfo = this.medicalInfo;
    this.pacientService.createPacient(this.pacientInfo).subscribe((pacient) => {
      loader.dismiss();
			this.navCtrl.push(PacientPage, {pacientId: pacient.id});
		});
  }

}
