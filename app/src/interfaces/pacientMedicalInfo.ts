import {InsulinType} from "./insulinType";

export interface PacientMedicalInfo {
  pacient_id? : number | null | undefined; //autogen
  basalInsulinType? : InsulinType | null | undefined; // dropdown
  bolusInsulinType? : InsulinType | null | undefined; // same
  recommendedDailyCarbohydrates? : number | null | undefined;
  weight? : number | null | undefined;
  height? : number | null | undefined;
  hemoglobinA1C? : number | null | undefined;
  tamponRates : {[key: number]: number} | null | undefined; // 3 values add or get
  correctionRates : {[key: number]: number} | null | undefined; // 3 values add or get
}
