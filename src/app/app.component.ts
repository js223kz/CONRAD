import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, Keyboard } from 'ionic-native';
import { DbCloneService } from '../pages/dimension/providers/dbclone.service';
import { ConstantService } from './constant.service';
import { DimensionFormPage } from '../pages/dimension/form-page';



@Component({
  templateUrl: 'app.html',

})
export class MyApp {
  public rootPage: any = DimensionFormPage;

  constructor(platform: Platform,
              dbCloneService: DbCloneService,
              constantService: ConstantService) {

    platform.ready().then(() => {
      if((<any>window).cordova && (<any>window).cordova.plugins.Keyboard) {
        //Keyboard.hideKeyboardAccessoryBar(true);
        Keyboard.disableScroll(true);
      }

      dbCloneService.cloneDatabases(constantService.DATABASES);

      StatusBar.overlaysWebView(false);
      StatusBar.styleDefault();
      Splashscreen.hide();

  });
  }
}
