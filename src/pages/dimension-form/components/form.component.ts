import { Component, Input, Output, OnInit, EventEmitter }from '@angular/core';
import { Keyboard } from 'ionic-native';
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
  @Output() formSubmitted = new EventEmitter<any>();


  constructor(public formrowService: FormRowService) {
  }

  ngOnInit() {
    this.form = this.formrowService.toFormGroup(this.formRows);
  }

  onSubmit(value: any){
    this.formSubmitted.emit(value);
  }
  onSelectChange(){
    console.log("select change")
  }
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      Keyboard.close();
    }
  }
}
