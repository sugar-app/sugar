import {Gender} from './gender'

export interface Pacient {
  id : number;
  firstName : string;
  lastName : string;
  birthDate : Date;
  sex : Gender;
  diagnosticDate: Date;

}
