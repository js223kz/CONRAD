import { Component, Input, OnInit }from '@angular/core';
import { FormRowModel } from '../models/formrow.model';
import { FormGroup } from '@angular/forms';
import { FormRowService } from '../providers/formrow.service';



@Component({
  selector: 'dimension-form',
  templateUrl: 'form.component.html',
  providers: [FormRowService]
})

export class FormComponent implements OnInit{
  @Input() formRows: FormRowModel<any>[];
  @Input() form: FormGroup;

  constructor(public formrowService: FormRowService) {}

  ngOnInit() {
    this.form = this.formrowService.toFormGroup(this.formRows);

  }
  onSubmit(value: any){
    console.log(JSON.stringify(value));
  }
}
