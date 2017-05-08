import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, Keyboard } from 'ionic-native';
import { DbCloneService } from '../shared/providers/dbclone.service';
import { ConstantService } from '../shared/providers/constant.service';
import { DimensionFormPage } from '../pages/dimension-form/form-page';


@Component({
  templateUrl: 'app.html',
  providers: [ConstantService, DbCloneService]

})
export class MyApp {

  public rootPage: any = DimensionFormPage;

  success(){
    console.log("success");
  }

  error(){
    console.log("error");
  }
  constructor(platform: Platform,
              dbCloneService: DbCloneService,
              constantService: ConstantService) {

    platform.ready().then(() => {
      if((<any>window).cordova && (<any>window).cordova.plugins.Keyboard) {
        (<any>window).cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        Keyboard.disableScroll(false);
      }
      dbCloneService.cloneDatabases(constantService.DATABASES)
      .then(this.success)
      .catch(this.error);
          
      StatusBar.overlaysWebView(false);
      StatusBar.styleDefault();
      Splashscreen.hide();
  });
  }
}
