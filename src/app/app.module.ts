import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NormativoPage } from '../pages/normativo/normativo';
import { QuienesPage } from '../pages/quienes/quienes';
import { ParticipanPage } from '../pages/participan/participan';
import { MotPage } from '../pages/mot/mot';
import { DiagnosticoPage } from '../pages/diagnostico/diagnostico';
import { AccordionListComponent } from '../components/accordion-list/accordion-list';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NormativoPage,
    AccordionListComponent,
    QuienesPage,
    ParticipanPage,
    MotPage,
    DiagnosticoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NormativoPage,
    QuienesPage,
    ParticipanPage,
    MotPage,
    DiagnosticoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
