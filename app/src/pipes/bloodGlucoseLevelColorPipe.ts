import {Pipe} from '@angular/core';
import {CalculatorService} from '../services/calculator'

@Pipe({
  name: 'bloodglucoselevelcolor'
})
export class BloodGlucoseLevelColorPipe {
  transform(bloodGlucoseLevel: number, calculatorService: CalculatorService): string {
      if (bloodGlucoseLevel < calculatorService.minNormalGlucoseLevel){
        return "blue";
      }

      if (bloodGlucoseLevel > calculatorService.maxNormalGlucoseLevel){
          return "red";
      }
        

    return "green";
  }
}
