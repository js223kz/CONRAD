import { Component} from '@angular/core';
import { DataService } from '../providers/data-service';
import { FormRow } from '../models/form-row';


@Component({
  selector: 'dimension-form',
  template: `<form>
              <ion-item *ngFor='let row of formRowsData'
                        class="row form-row">

                <label for={{row.fieldName}}
                  class="col col-20 col-form-label">
                  {{row.name}}
                </label>
                <div [hidden]="row.steps != null">Input</div>
                <div [hidden]="row.steps == null">DropDown</div>
                <label for={{row.fieldName}}
                  class="col col-20 input-unit">
                  {{row.symbol}}
                </label>

              </ion-item>
              <button type="submit"
                class="form-control btn-calculate"
                (click)="calculateRows()">
                Beräkna
              </button>
            </form>`
})

export class DimensionForm {
  formRowsData: FormRow[] = [];
  constructor(public dataService: DataService) {

  }
  errorMessage(error){
    console.log(JSON.stringify("error" + error));
  }
  changeForm(system: String){
    this.dataService.getData(system, 'SELECT * FROM input_fields')
    .then((data)=>{
      this.formRowsData = data;
    })
    .catch(this.errorMessage);
  }

  calculateRows(){

  }
}
