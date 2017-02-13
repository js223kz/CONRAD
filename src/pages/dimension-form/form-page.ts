import { Component, Output, EventEmitter } from '@angular/core';
import { Platform, NavController} from 'ionic-angular';
import { DataService } from './providers/data.service';
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
  defaultSystem: string = 'Proline.sqlite';
  selectedSystem: string;

  constructor(platform: Platform,
    private navCtrl: NavController,
    public dataService: DataService) {

    platform.ready().then(() => {
      this.changeForm(this.defaultSystem);
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
    this.navCtrl.push(DimensionTablePage,
      {data: JSON.stringify(formValues), system: this.selectedSystem});
  }

  onSystemDropdownChange(system: string){
    this.dataLoaded = false;
    this.selectedSystem = system;
    this.changeForm(system);
  }
}
