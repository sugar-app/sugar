import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ChildPage } from './child';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goToChild() {
    this.navCtrl.push(ChildPage)
  }
}
