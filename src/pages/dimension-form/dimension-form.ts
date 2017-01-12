import { Component, ViewChild } from '@angular/core';
import { SystemDropdown } from './components/system-dropdown.component';
import { DimensionForm } from './components/form.component';

@Component({
  selector: 'page-dimension-form',
  templateUrl: 'dimension-form.html',
  entryComponents : [SystemDropdown, DimensionForm]
})


export class DimensionFormPage {
    databases: String[] = [];
    @ViewChild(DimensionForm) dimensionForm: DimensionForm;


  constructor() {
  }

  onSystemDropdownChange(system: String){
    this.dimensionForm.changeForm(system);
  }

  /*private setFormRows(rows){

    let form: any =  document.getElementById('form-row');
    let htmlString: string;

    for (let i = 0; i < rows.length; i++) {
      //rows[i] = instance of class FormRow
      htmlString += rows[i].createFormRow();
    }
    form.innerHTML = htmlString;
  }*/


}
