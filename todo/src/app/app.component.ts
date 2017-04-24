import { SettingsComponent } from '../pages/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoryComponent } from '../pages/category/category';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  pages: Array<{title: string, component: any,icons:string}>;

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
    this.pages = [
      { title: 'Home', component: HomePage,icons:"home" },
       { title: 'Category', component:  CategoryComponent,icons:"settings" },
      { title: 'Settings', component: SettingsComponent,icons:"settings" }
     
    ];
  }
  openPage(page) {    
    console.log(page)
    this.nav.setRoot(page.component);
  }
}
