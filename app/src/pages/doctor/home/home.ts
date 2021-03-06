import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Pacient } from '../../../interfaces/pacient';
import {Observable} from "rxjs";
import {PacientService} from "../../../services/pacient";

import { AddPacientPage } from './add-pacient';

import { PacientPage } from '../../pacient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pacients: Observable<Pacient[]>;

  constructor(public navCtrl: NavController, private pacientService: PacientService, loading: LoadingController) {
    this.pacients = pacientService.getPacients();
    let loader = loading.create({
      content: 'Please wait...',
    });
    loader.present();
    this.pacients.subscribe(() => {
      loader.dismiss();
    });
  }

  goToAddPacient() {
    this.navCtrl.push(AddPacientPage);
  }

  goToPacient(id) {
    this.navCtrl.push(PacientPage, {pacientId: id});
  }
}
