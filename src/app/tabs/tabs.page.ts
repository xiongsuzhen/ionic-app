import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { SettingProvider } from '../wongoing/settings.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedTheme: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingProvider) {
    // 获取当前主题
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  theme() {
    console.log(111)
    if (this.selectedTheme === 'dark-theme') {
      //改变
      this.settings.setActiveTheme('light-theme');
    }else if(this.selectedTheme === 'light-theme'){
      this.settings.setActiveTheme('primary-theme');
    }else{
      this.settings.setActiveTheme('dark-theme');
    }
  }

}
