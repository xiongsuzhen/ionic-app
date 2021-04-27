import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DatePipe } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { SettingProvider } from './wongoing/settings.service';
import { NavController, NavParams} from '@ionic/angular';


// import {TranslateModule} from '@ngx-translate/core'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule, 
    HttpClientModule, 
    NgZorroAntdMobileModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    DatePipe,
    SplashScreen,
    StatusBar,
    SettingProvider,
    NavController,
    NavParams,
    { 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy 
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
