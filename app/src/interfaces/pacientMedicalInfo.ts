import {InsulinType} from "./insulinType";
import {DailyMeal} from "./dailyMeal";

export interface PacientMedicalInfo{
  insulinType? : InsulinType;
  recommendedDailyCarbohydrates? : number;
  weight? : number;
  height? : number;
  hemoglobinA1C? : number;
  tamponRates : Map<DailyMeal, number>;
  correctionRates : Map<DailyMeal, number>;
}
