import {MedicalMetricType} from "./medicalMetricType";
export interface MedicalMetric {
  medicalMetricType : MedicalMetricType;
  value : number;
  date : Date;
}
