import { Injectable } from '@angular/core';
import { PacientMedicalInfo } from '../interfaces/pacientMedicalInfo'


export class CalculatorInput { 
    dailyMeal : number;
    bloodGlucoseLevel: number;
    carbohydrates : number;
    kilocalories: number;
}

export class CalculatorOutput {
    carbohydratesUnits : number;
    correctionUnits : number;
    kCalUnits : number;
}

@Injectable()
export class CalculatorService {
    readonly maxNormalGlucoseLevel : number = 130;
    readonly minNormalGlucoseLevel : number = 90;

    calculate(pacientMedicalInfo : PacientMedicalInfo, input:CalculatorInput) : CalculatorOutput {
        const kCalFactor : number = 100; // gold standard

        var carbohydratesFactor : number = pacientMedicalInfo.tamponRates[input.dailyMeal];
        var correctiveFactor : number = pacientMedicalInfo.correctionRates[input.dailyMeal];

        var correctionUnits = (input.bloodGlucoseLevel - this.maxNormalGlucoseLevel) / correctiveFactor;
        var carbohydratesUnits = input.carbohydrates / carbohydratesFactor;
        var kCalUnits = input.kilocalories / kCalFactor;

        return {
            carbohydratesUnits : carbohydratesUnits,
            correctionUnits: correctionUnits,
            kCalUnits : kCalUnits
        };
    }
}