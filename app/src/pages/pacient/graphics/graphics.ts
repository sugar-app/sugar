import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'graphics',
  templateUrl: 'graphics.html'
})
export class GraphicsPage {
  chartData = {
    title: 'Blood glucose levels',
    subTitle: 'This week',
    xAxis: {
            title: { text: 'Day of week' },
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
    yAxis: {
            title: {
                text: 'mg/dl'
            },
            plotBands: [{ // Light air
                from: 90,
                to: 130,
                color: 'rgba(50, 170, 50, 0.1)',
                label: {
                    text: 'Normal values',
                    style: {
                        color: '#606060'
                    }
                }
            }]
        },
    series: [{
      name: 'Blood glucose level',
      data: [170, 124, 200, 150, 130, 110, 90]
    }],
    spacingRight: 10,
    type: 'spline'
  };

  constructor(public navCtrl: NavController) {
  }
}
