import { Component, Input, Output, OnInit, EventEmitter }from '@angular/core';
import { Keyboard } from 'ionic-native';
import { FormRowModel } from '../models/formrow.model';
import { FormGroup } from '@angular/forms';
import { FormRowService } from '../providers/formrow.service';

@Component({
  selector: 'dimension-form',
  template: `
            <div style="width:80%; margin-left:10%; margin-right:10%;">
              <form [formGroup]="form"
                    (keydown)="keyDownFunction($event)"
                    (ngSubmit)="onSubmit(form.value)"
                    novalidate>
                <div *ngFor="let row of formRows"
                class="item-borderless">
                  <form-row minLen="row.minValue" maxLen="row.maxValue"[row]="row" [form]="form"></form-row>
                </div>
                <div>
                  <button style="width:100%;" ion-button type="submit"
                          [disabled]="!form.valid">
                          Beräkna
                  </button>
                </div>
              </form>
              </div>`,
  providers: [FormRowService]
})

export class FormComponent implements OnInit{
  @Input() formRows: FormRowModel<any>[];
  @Input() form: FormGroup;
  @Output() formSubmitted = new EventEmitter<any>();


  constructor(public formrowService: FormRowService) {
  }

  ngOnInit() {
    this.form = this.formrowService.toFormGroup(this.formRows);
  }

  onSubmit(formValues: any){
    this.formSubmitted.emit(formValues);
  }

  keyDownFunction(event) {
    if(event.keyCode === 13) {
      Keyboard.close();
    }
  }
}
