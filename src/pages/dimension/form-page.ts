import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { DataService } from './providers/data.service';
import { FormRowModel } from './models/formrow.model';



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

  constructor(platform: Platform,
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

  onSystemDropdownChange(system: string){
    this.dataLoaded = false;
    this.changeForm(system);
  }

}
