import {InsulinForm} from './insulinForm';
import {InsulinAction} from './insulinAction'

export interface InsulinType {
  id : number;
  genericName : string;
  brandName : string;
  manufacturer : string;
  form : InsulinForm;
  delivery : string;
  onset : number;
  peak : number;
  duration : number;
  action: InsulinAction;
}
