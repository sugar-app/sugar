import {Gender} from './gender'
import {DiabetesType} from './diabetesType';
import {PacientMedicalInfo} from "./pacientMedicalInfo";

export interface Pacient {
  id? : number;
  firstName : string;
  lastName : string;
  birthDay : Date;
  gender : Gender;
  diagnosticDate: Date;
  diabetesType : DiabetesType;
  medicalInfo? : PacientMedicalInfo | null | undefined;
}

