import { Component } from '@angular/core';

import { MyInfoPage } from './info/info';
import { CalculatorPage } from './calculator/calculator';
import { GraphicsPage } from './graphics/graphics';
import { Pacient } from '../../interfaces/pacient';
import {PacientService} from '../../services/pacient'
import { NavController, NavParams } from 'ionic-angular';

import {Observable} from 'rxjs';

@Component({
  templateUrl: 'pacient.html'
})
export class PacientPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyInfoPage;
  tab2Root: any = CalculatorPage;
  tab3Root: any = GraphicsPage;

  public pacient : Observable<Pacient>;

  constructor(public navParams: NavParams, public navCtrl : NavController, public pacientService : PacientService) {
    var pacientId = navParams.get("pacientId");
    this.pacient = pacientService.getPacientsById(pacientId);
  }
}
