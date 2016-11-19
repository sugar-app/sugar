import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/doctor/about/about';
import { ContactPage } from '../pages/doctor/contact/contact';
import { HomePage } from '../pages/doctor/home/home';
import { LoginPage } from '../pages/login';
import { DoctorPage } from '../pages/doctor';
import { ChildPage } from '../pages/doctor/about/child';
<<<<<<< HEAD
import { AddPacientPage } from '../pages/doctor/home/add-pacient';
=======
import {GenderIconPipe} from "../pipes/genderIconPipe";
>>>>>>> ce04ff20df79e70df834bb4ba8a88241f59bb8d9
import { PacientService } from '../services/pacient';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    DoctorPage,
    ChildPage,
<<<<<<< HEAD
    AddPacientPage
=======
    GenderIconPipe
>>>>>>> ce04ff20df79e70df834bb4ba8a88241f59bb8d9
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
    AddPacientPage
  ],
  providers: [
    PacientService,
  ]
})
export class AppModule {}
