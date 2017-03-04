import { Component, Output, EventEmitter } from '@angular/core';
import { Platform, NavController} from 'ionic-angular';
import { DataService } from './providers/data.service';
import { ConstantService } from '../../shared/providers/constant.service';
import { FormRowModel } from './models/formrow.model';
import { DimensionTablePage } from '../dimension-table/dimension-table';


@Component({
  selector: 'form-page',
  templateUrl: 'form-page.html',
  providers: [DataService],
})

export class DimensionFormPage{
  formRows: FormRowModel<any>[] = []
  dataLoaded: boolean = false;
  query: string = 'SELECT * FROM input_fields';
  selectedSystem: Object;

  constructor(platform: Platform,
    private navCtrl: NavController,
    public dataService: DataService,
    public constantService: ConstantService) {

    this.selectedSystem = constantService.DEFAULTSYSTEM;

    console.log("defaultSelected: " + JSON.stringify(this.selectedSystem))

    platform.ready().then(() => {
      this.changeForm('Proline.sqlite');
    });
  }

  changeForm(system: string){
    this.dataService.getData(system, this.query)
    .then((data)=>{
      this.formRows = data;
      this.dataLoaded = true;
    })
    .catch(this.errorMessage);
  }

  errorMessage(error){
    console.log(JSON.stringify("error" + error));
  }

  onFormSubmission(formValues: any){
    console.log("change page: " + JSON.stringify(this.selectedSystem));
    this.navCtrl.push(DimensionTablePage,
      {data: JSON.stringify(formValues), system: this.selectedSystem});
  }

  onSystemDropdownChange(system: any){
    this.dataLoaded = false;
    this.selectedSystem = system;
    this.changeForm(system.dbName);
  }
}
