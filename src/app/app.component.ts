import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, Keyboard } from 'ionic-native';
import { DbCloneService } from '../pages/dimension-form/providers/db-clone-service';
import { ConstantService } from '../pages/dimension-form/providers/constant-service';
import { DimensionFormPage } from '../pages/dimension-form/dimension-form';


@Component({
  templateUrl: 'app.html',
  providers: [ConstantService]

})
export class MyApp {
  public rootPage: any = DimensionFormPage;

  constructor(platform: Platform,
              dbCloneService: DbCloneService,
              constantService: ConstantService) {

    platform.ready().then(() => {
      if((<any>window).cordova && (<any>window).cordova.plugins.Keyboard) {
        console.log("window")
        //Keyboard.hideKeyboardAccessoryBar(true);
        Keyboard.disableScroll(true);
      }

      dbCloneService.cloneDatabases(constantService.DATABASES);


      StatusBar.styleDefault();
      Splashscreen.hide();

  });
  }
}
