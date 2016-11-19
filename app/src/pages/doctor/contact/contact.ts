import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { NavController } from 'ionic-angular';

import { PacientService } from '../../../services/pacient';
import { Pacient } from '../../../interfaces/pacient';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pacients: Observable<Pacient[]>;

  constructor(public navCtrl: NavController, private pacientService: PacientService) {
    this.pacients = pacientService.getPacients();
  }
}
