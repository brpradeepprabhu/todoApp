import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsComponent } from '../pages/settings/settings';
import { CategoryComponent } from '../pages/category/category';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageService } from '../services/storageService';
import { SettingsService } from '../services/settingsServices';
import { CreateTaskComponent } from '../pages/createTask/createTask';
import { CreateCategory } from '../pages/createCategory/createCategory';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsComponent,
    CategoryComponent,
    CreateTaskComponent,
    CreateCategory
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsComponent,
    CategoryComponent,
    CreateTaskComponent,
    CreateCategory
  ],
  providers: [
    StatusBar, SettingsService, StorageService,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
