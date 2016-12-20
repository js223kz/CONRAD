import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { DimensionFormPage } from '../pages/dimension-form/dimension-form';
import { DbCloneService } from '../providers/db-clone-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any = DimensionFormPage;

  constructor(platform: Platform, cloner: DbCloneService) {
    platform.ready().then(() => {
      cloner.cloneDatabases();

      StatusBar.styleDefault();
      Splashscreen.hide();

  });
  }
}
