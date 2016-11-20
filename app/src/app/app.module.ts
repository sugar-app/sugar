import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/doctor/about/about';
import { ContactPage } from '../pages/doctor/contact/contact';
import { HomePage } from '../pages/doctor/home/home';
import { LoginPage } from '../pages/login';
import { DoctorPage } from '../pages/doctor';
import { ChildPage } from '../pages/doctor/about/child';
import { AddPacientPage } from '../pages/doctor/home/add-pacient';
import {GenderIconPipe} from "../pipes/genderIconPipe";
import { PacientService } from '../services/pacient';
import { MedicalInfoPage } from '../pages/doctor/home/add-pacient/pacient-medical-info';
import {PacientPage} from '../pages/pacient';
import {MyInfoPage} from '../pages/pacient/info/info';
import {GraphicsPage} from '../pages/pacient/graphics/graphics';
import {CalculatorPage} from '../pages/pacient/calculator/calculator';
import {CalculatorService} from '../services/calculator';
import {BloodGlucoseLevelColorPipe} from '../pipes/bloodGlucoseLevelColorPipe';
import { UserLoginModal } from '../modals/user-login';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    DoctorPage,
    ChildPage,
    AddPacientPage,
    GenderIconPipe,
    BloodGlucoseLevelColorPipe,
    MedicalInfoPage,
    PacientPage,
    MyInfoPage,
    GraphicsPage,
    CalculatorPage,
    UserLoginModal,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    DoctorPage,
    ChildPage,
    AddPacientPage,
    MedicalInfoPage,
    PacientPage,
    MyInfoPage,
    GraphicsPage,
    CalculatorPage,
    UserLoginModal,
  ],
  providers: [
    PacientService,
    CalculatorService,
  ]
})
export class AppModule {}
