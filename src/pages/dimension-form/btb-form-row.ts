import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { DataService } from './providers/data-service';
import { DATABASES } from '../../app/constants';

@Component({
  selector: 'btb-form-row',
  template: `<div class="row form-row"
              <label for=${ this.fieldName }
                class="col col-20 col-form-label">
                ${ this.name }
              </label>
              ${this.createInput()}
              <label for=${ this.fieldName }
                class="col col-20 input-unit">
                  ${ this.symbol }
              </label>
              <div class="error"
                ng-messages="dimension-form.${ this.fieldName }.$error"
                role="alert">
                <div ng-message="required">Tomt fält</div>
                <div ng-message="min">Min ${ this.minValue }</div>
                <div ng-message="max">Max ${ this.maxValue }</div>
              </div>
              <div class="error"
                ng-show="dimension-form.${ this.fieldName }.$error"
                role="alert">Ogiltigt tal
              </div>
            </div>
            `
})
export class BtbFormRow {

  constructor(platform: Platform,
              public dataService: DataService,
              public databases: string[] = DATABASES) {

    platform.ready().then(() => {
      this.getFormData(databases[0]);
    });
  }

  private errorMessage(error){
    console.log(JSON.stringify("error" + error));
  }

  private setFormRows(rows){
    let form: any =  document.getElementById('form-row');
    let htmlString: string;

    for (let i = 0; i < rows.length; i++) {
      //rows[i] = instance of class FormRow
      htmlString += rows[i].createFormRow();
    }
    form.innerHTML = htmlString;
  }

  private getFormData(database){
    this.dataService.getData(database, 'SELECT * FROM input_fields')
    .then(this.setFormRows)
    .catch(this.errorMessage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DimensionFormPage');
  }

}
