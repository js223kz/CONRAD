import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DimensionFormPage } from '../pages/dimension-form/dimension-form';
import { DbCloneService } from '../providers/db-clone-service';
import { DimDataService } from '../providers/dim-data-service';
import { FormRowService } from '../providers/form-row-service';



@NgModule({
  declarations: [
    MyApp,
    DimensionFormPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DimensionFormPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbCloneService,
    DimDataService,
    FormRowService
  ]
})
export class AppModule {}
