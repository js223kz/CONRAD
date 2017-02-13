import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { MyApp } from './app.component';
import { Footer } from './footer.component';
import { Header } from './header.component';
import { DimensionFormPage } from '../pages/dimension-form/form-page';
import { ContactPage } from '../pages/contact/contact';
import { DimensionTablePage } from '../pages/dimension-table/dimension-table';
import { DataService } from '../pages/dimension-form/providers/data.service';
import { FormComponent } from '../pages/dimension-form/components/form.component';
import { FormRowComponent } from '../pages/dimension-form/components/formrow.component';
import { FormDropDown } from '../pages/dimension-form/components/formdropdown.component';

@NgModule({
  declarations: [
    MyApp,
    DimensionFormPage,
    DimensionTablePage,
    ContactPage,
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
    DimensionFormPage,
    ContactPage,
    DimensionTablePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,
  ]
})
export class AppModule {}
