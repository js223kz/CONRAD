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
        group[row.fieldName] = new FormControl(row.value, [Validators.required,
                                                          CustomValidators.min(row.minValue),
                                                          CustomValidators.max(row.maxValue),
                                                          CustomValidators.digits])
    });

    return new FormGroup(group);
  }
}
