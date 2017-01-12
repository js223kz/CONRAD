import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ConstantService } from '../pages/dimension-form/providers/constant-service';
import { DbCloneService } from '../pages/dimension-form/providers/db-clone-service';
import { DataService } from '../pages/dimension-form/providers/data-service';
import { DimensionFormPage } from '../pages/dimension-form/dimension-form';
import { SystemDropdown } from '../pages/dimension-form/components/system-dropdown.component';
import { DimensionForm } from '../pages/dimension-form/components/form.component';


@NgModule({
  declarations: [
    MyApp,
    DimensionFormPage,
    DimensionForm,
    SystemDropdown
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
    ConstantService,
    DbCloneService,
    DataService
  ]
})
export class AppModule {}
