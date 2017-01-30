
export class FormRowModel<T> {
  value: T;
  fieldName: string;
  minValue: number;
  maxValue: number;
  required: boolean;
  symbol: string;
  name: string;
  options: number[];
  controlType: string

  constructor(rowData){
    this.value = rowData.default_value
    this.fieldName = rowData.fieldname;
    this.minValue = rowData.min_value;
    this.maxValue = rowData.max_value;
    this.symbol = rowData.symbol;
    this.name = rowData.name;
    this.required = true;

  }
}
