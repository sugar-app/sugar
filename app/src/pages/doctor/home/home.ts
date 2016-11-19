import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Pacient } from '../../../interfaces/pacient';
import {Observable} from "rxjs";
import {PacientService} from "../../../services/pacient";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pacients: Observable<Pacient[]>;

  constructor(public navCtrl: NavController, private pacientService: PacientService) {
    this.pacients = pacientService.getPacients();
  }
}
