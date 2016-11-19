import {InsulinType} from "./insulinType";
import {TamponRate} from "./tamponRate";

export interface PacientMedicalInfo{
  insulinType? : InsulinType;
  recommendedDailyCarbohydrates? : number;
  weight? : number;
  height? : number;
  hemoglobinA1C? : number;
  tamponRates : TamponRate[];
}
