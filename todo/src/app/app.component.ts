import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { HelloIonicPage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,   
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {    
    this.nav.setRoot(page.component);
  }
}
