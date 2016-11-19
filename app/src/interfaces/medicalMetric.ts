import {MedicalMetricType} from "./medicalMetricType";
export interface MedicalMetric {
  id : number;
  medicalMetricType : MedicalMetricType;
  value : number;
  date : Date;
}
