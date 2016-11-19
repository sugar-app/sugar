import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/doctor/about/about';
import { ContactPage } from '../pages/doctor/contact/contact';
import { HomePage } from '../pages/doctor/home/home';
import { LoginPage } from '../pages/login';
import { DoctorPage } from '../pages/doctor';
import { ChildPage } from '../pages/doctor/about/child';
import {GenderIconPipe} from "../pipes/genderIconPipe";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    DoctorPage,
    ChildPage,
    GenderIconPipe
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
    ChildPage
  ],
  providers: [  ]
})
export class AppModule {}
