import {InsulinType} from "./insulinType";
import {DailyMeal} from "./dailyMeal";

export interface PacientMedicalInfo {
  basalInsulinType? : InsulinType | null | undefined;
  bolusInsulinType? : InsulinType | null | undefined;
  recommendedDailyCarbohydrates? : number | null | undefined;
  weight? : number | null | undefined;
  height? : number | null | undefined;
  hemoglobinA1C? : number | null | undefined;
  tamponRates : Map<DailyMeal, number> | null | undefined;
  correctionRates : Map<DailyMeal, number> | null | undefined;

}
