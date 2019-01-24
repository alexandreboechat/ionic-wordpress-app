import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ApiProvider } from '../providers/api/api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  constructor(public platform: Platform,
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public api: ApiProvider) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.api.getCategorias();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(cat_id:number = 0) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(HomePage, {cat_id: cat_id});
  }
}
