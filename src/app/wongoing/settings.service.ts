import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
// import 'rxjs/add/operator/map';

/*
  Generated class for the SettingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingProvider {

  private theme: BehaviorSubject<string>;
  
     constructor() {
         // theme 是 BehaviorSubject实例
         this.theme = new BehaviorSubject('light-theme');
     }
  
     public setActiveTheme(val) {
       console.log(val)
         // 改变值
         this.theme.next(val);
     }
  
     public getActiveTheme() {
         // 观察
         return this.theme.asObservable();
     }

}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class SettingsService {

//   private theme: BehaviorSubject<string>;

//   /**
//    * 构造方法，设置默认主题
//    */
//   constructor() {
//     this.theme = new BehaviorSubject('primary-theme');
//   }

//   /**
//    * 设置主题的方法
//    * @param val 要设置的新主题
//    */
//   public setActiveTheme(val) {
//     this.theme.next(val);
//   }

//   /**
//    * 获取当前主题的观察者对象
//    */
//   public getActiveTheme() {
//     return this.theme.asObservable();
//   }
// }
