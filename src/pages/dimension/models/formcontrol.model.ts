import { FormRowModel } from './formrow.model';

export class DropDownControl extends FormRowModel<number>{
  options = [];
  controlType = 'dropdown';
  constructor(rowData){
    super(rowData);
    this.options = rowData.steps.split(',');
  }
}

export class InputControl extends FormRowModel<number>{
  type = 'number';
  controlType = 'text';
  constructor(rowData){
    super(rowData);
  }
}
