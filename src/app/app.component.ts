import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NormativoPage } from '../pages/normativo/normativo';
import { QuienesPage } from '../pages/quienes/quienes';
import { ParticipanPage } from '../pages/participan/participan';
import { MotPage } from '../pages/mot/mot';
import { DiagnosticoPage } from '../pages/diagnostico/diagnostico';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: 'Normativo', component: NormativoPage},
      { title: 'Quienes Somos', component: QuienesPage},
      { title: 'Quienes Participan', component: ParticipanPage},
      { title: 'Diagnóstico', component: DiagnosticoPage},
      { title: 'MOT', component: MotPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.nav.push(page.component);
  }
}
