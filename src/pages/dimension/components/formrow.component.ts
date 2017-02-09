import { Component, Input }from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormRowModel } from '../models/formrow.model';


@Component({
  selector: 'form-row',
  templateUrl: 'formrow.component.html'
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
/*$(document).ready(function() {
        $('input').keypress(function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if ( (code==13) || (code==10)){
                $(this).blur();
                return false;
            }
        });
      });*/
