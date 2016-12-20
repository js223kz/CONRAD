import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { DimDataService } from '../../providers/dim-data-service';
import { FormRowService } from '../../providers/form-row-service';




@Component({
  selector: 'page-dimension-form',
  templateUrl: 'dimension-form.html'
})
export class DimensionFormPage {

  constructor(platform: Platform,
              public dataService: DimDataService,
              public rowService: FormRowService) {

    platform.ready().then(() => {
      this.getFormData();
    });
  }

  private errorMessage(error){
    console.log(error);
  }

  private setFormRows(rows){
    if(rows.length > 0) {
      for (let i = 0, max = rows.length; i < max; i++) {
        let row = this.rowService.createFormRow(rows.item(i));
        console.log(row);
        //console.log(JSON.stringify(rows.item(i)))
      }
    } else {
      console.log("inga rader");
    }
  }

  private getFormData(){
    this.dataService.getData('Proline.sqlite', 'SELECT * FROM input_fields')
    .then(this.setFormRows)
    .catch(this.errorMessage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DimensionFormPage');
  }

}
