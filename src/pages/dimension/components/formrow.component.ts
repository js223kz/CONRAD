import { Component, Input }from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormRowModel } from '../models/formrow.model';


@Component({
  selector: 'form-row',
  templateUrl: 'formrow.component.html',
})

export class FormRowComponent{
  @Input() row: FormRowModel<any>;
  @Input() form: FormGroup;

  constructor() {
  }
  get isValid() {
    return this.form.controls[this.row.fieldName].valid;
  }
}
