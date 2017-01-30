import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { MyApp } from './app.component';
import { Footer } from './footer.component';
import { Header } from './header.component';
import { ConstantService } from '../pages/dimension/providers/constant.service';
import { DbCloneService } from '../pages/dimension/providers/dbclone.service';
import { DataService } from '../pages/dimension/providers/data.service';
import { DimensionFormPage } from '../pages/dimension/form-page';
import { FormComponent } from '../pages/dimension/components/form.component';
import { FormRowComponent } from '../pages/dimension/components/formrow.component';
import { FormDropDown } from '../pages/dimension/components/formdropdown.component';





@NgModule({
  declarations: [
    MyApp,
    DimensionFormPage,
    Footer,
    Header,
    FormComponent,
    FormRowComponent,
    FormDropDown
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
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
