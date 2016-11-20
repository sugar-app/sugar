import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {CalculatorService, CalculatorOutput, CalculatorInput} from '../../../services/calculator'
import {DailyMeal} from '../../../interfaces/dailyMeal'
import {Pacient} from '../../../interfaces/pacient'

@Component({
  selector: 'calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {
  public calculatorInput : CalculatorInput;

  public pacient: Pacient = {
        firstName: '',
        lastName: '',
        birthDay: new Date(),
        gender: 1,
        diagnosticDate: new Date(),
        diabetesType: 1,
        medicalInfo: {
          tamponRates: {},
          correctionRates: {}
        },
    };

  constructor(public navCtrl: NavController, public calculatorService: CalculatorService,public params: NavParams) {
    params.data.subscribe((pacient) => {
      this.pacient = pacient;
    });
    this.calculatorInput = {
      dailyMeal : 1,
      bloodGlucoseLevel : 120,
      carbohydrates : 0,
      kilocalories : 0
    };
  }

  public dailyMeals = [
   {id: DailyMeal.First, genericName: 'First Meal of the Day'},
   {id: DailyMeal.Second, genericName: 'Second Meal of the Day'},
   {id: DailyMeal.Third, genericName: 'Third Meal of the Day'},
 ];

 calculateStatistics(){
  console.log(this.pacient);
 }
}
