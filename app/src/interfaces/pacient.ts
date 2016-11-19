import {Gender} from './gender'

export interface Pacient {
  id : number;
  firstName : string;
  lastName : string;
  age : number;
  sex : Gender;
}
