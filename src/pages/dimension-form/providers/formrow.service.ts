import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormRowModel } from '../models/formrow.model';
import { CustomValidators } from 'ng2-validation';

@Injectable()
export class FormRowService {
  constructor() { }

  toFormGroup(formRows: FormRowModel<any>[] ) {
    let group: any = {};

    formRows.forEach((row)=>{
      let max = Number(row.maxValue);
      let min = Number(row.minValue);

      group[row.fieldName] = new FormControl(row.value, [Validators.required,
                                                        CustomValidators.min(min),
                                                        CustomValidators.max(max)]);
    });

    return new FormGroup(group);
  }
}
