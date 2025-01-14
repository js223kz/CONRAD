import { Component } from '@angular/core';
import { Platform, NavController} from 'ionic-angular';
import { DataService } from '../../shared/providers/data.service';
import { ConstantService } from '../../shared/providers/constant.service';
import { FormRowModel } from '../../shared/models/formrow.model';
import { DimensionTablePage } from '../dimension-table/dimension-table';
import { DropDownControl } from '../../shared/models/formcontrol.model';
import { InputControl } from '../../shared/models/formcontrol.model';


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
  error: any = "";

  constructor(private platform: Platform,
    private navCtrl: NavController,
    private dataService: DataService,
    private constantService: ConstantService) {

    this.selectedSystem = constantService.DEFAULTSYSTEM;
    this.error = "";

    platform.ready().then(() => {
      this.changeForm('Proline.sqlite');
    });
  }

  changeForm(system: string){
    let formControls: any[] = [];

    this.dataService.getData(system, this.query)
    .then((data)=>{
      for (let i = 0; i < data.length; i++) {
        if(data[i].steps == null){
          formControls.push(new InputControl(data[i], system));
        }else{
          formControls.push(new DropDownControl(data[i], system));
        }
      }

      this.formRows = formControls;
      this.dataLoaded = true;
    })
    .catch((error)=>{
      this.errorMessage(error);
    });
  }

  errorMessage(error){
    this.error = error;
  }

  onFormSubmission(formValues: any){
    let inputObject = {
      formValues: formValues,
      system: this.selectedSystem
    }
    this.navCtrl.push(DimensionTablePage,
      { inputObject: inputObject });
  }

  onSystemDropdownChange(system: any){
    this.dataLoaded = false;
    this.selectedSystem = system;
    this.changeForm(system.dbName);
  }
}
