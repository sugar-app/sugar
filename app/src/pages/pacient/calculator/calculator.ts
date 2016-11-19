import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {CalculatorService, CalculatorOutput, CalculatorInput} from '../../../services/calculator'
import {DailyMeal} from '../../../interfaces/dailyMeal'
import {Pacient} from '../../../interfaces/pacient'

@Component({
  selector: 'calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {
  private calculatorInput : CalculatorInput;

  constructor(public navCtrl: NavController, public calculatorService: CalculatorService , public pacient : Pacient) {
    this.calculatorInput = {
      dailyMeal : 1,
      bloodGlucoseLevel : 120,
      carbohydrates : 0,
      kilocalories : 0
    };
  }

  private dailyMeals = [
   {id: DailyMeal.First, genericName: 'First Meal of the Day'},
   {id: DailyMeal.Second, genericName: 'Second Meal of the Day'},
   {id: DailyMeal.Third, genericName: 'Third Meal of the Day'},
 ];

 calculateStatistics(){

 }
}
