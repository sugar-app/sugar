import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'graphics',
  templateUrl: 'graphics.html'
})
export class GraphicsPage {
  chartData = {
    title: 'Example chart',
    series: [{
      data: [29.9, 71.5, 106.4, 129.2]
    }],
    spacingRight: 10
  };

  constructor(public navCtrl: NavController) {
  }
}
