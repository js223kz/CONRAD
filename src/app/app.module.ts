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
import { DataService } from '../shared/providers/data.service';
import { FormComponent } from '../shared/components/form.component';
import { FormRowComponent } from '../shared/components/formrow.component';
import { FormDropDown } from '../shared/components/formdropdown.component';
import { GridComponent } from '../shared/components/grid.component';
import { InfoboxComponent } from '../shared/components/infobox.component';
import { PrintComponent } from '../shared/components/print.component';

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
    FormDropDown,
    GridComponent,
    InfoboxComponent,
    PrintComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
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
    DataService]
})
export class AppModule {}
