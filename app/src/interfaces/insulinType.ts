import {InsulinForm} from './insulinForm';

export interface InsulinType {
  genericName : string;
  brandName : string;
  manufacturer : string;
  form : InsulinForm;
  delivery : string;
  onset : number;
  peak : number;
  duration : number;
}
