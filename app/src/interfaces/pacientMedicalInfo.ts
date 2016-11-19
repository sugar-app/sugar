import {InsulinType} from "./insulinType";

export interface PacientMedicalInfo {
  patient_id : number;
  basalInsulinType? : InsulinType | null | undefined;
  bolusInsulinType? : InsulinType | null | undefined;
  recommendedDailyCarbohydrates? : number | null | undefined;
  weight? : number | null | undefined;
  height? : number | null | undefined;
  hemoglobinA1C? : number | null | undefined;
  tamponRates : {[key: number]: number} | null | undefined;
  correctionRates : {[key: number]: number} | null | undefined;
}
