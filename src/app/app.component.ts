import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingProvider } from './wongoing/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private selectedTheme: string;  // 保存当前主题样式名称
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settings: SettingProvider
  ) {
    this.initializeApp();
  }

  /**
   * 初始化应用方法
   */
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // 订阅可观察者对象
      this.settings.getActiveTheme().subscribe(val => {
        // console.log('theme = ' + val);
        const plats: any = this.platform.platforms();
        if (plats.length > 0) {
          // console.log('platform = ' + plats[0]);
          // 判断当前平台是android平台还是ios平台
          if (plats[0] === 'android') {
            this.selectedTheme = val + ' md ion-page hydrated';
          } else {
            this.selectedTheme = val + ' ios ion-page hydrated';
          }
        } else {
          this.selectedTheme = val;
        }
        console.log('theme = ' + this.selectedTheme);
      });
    });
  }
}
