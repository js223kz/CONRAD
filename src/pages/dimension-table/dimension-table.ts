import { Component} from '@angular/core';
import { NavParams} from 'ionic-angular';
import { DataService } from '../../shared/providers/data.service';
import { CalculationService } from '../../shared/providers/calculation.service';

@Component({
  selector: 'page-dimension-table',
  templateUrl: 'dimension-table.html',
  providers: [CalculationService]
})
export class DimensionTablePage{
  pageTitle: string;
  databaseName: any;
  formValues: string;
  query: string = 'SELECT * FROM article';
  descriptionQuery: string = 'SELECT * FROM description';
  convectorSelection: string;
  finnedSelection: string;
  tableRows: any [];
  descriptionRows: any [];
  inputObject: Object;
  error: string = '';

  constructor(private navParams: NavParams,
              private dataService: DataService,
              private calculationService: CalculationService) {

    this.inputObject = navParams.get('inputObject');
    this.pageTitle = this.inputObject["system"].displayName;
    this.databaseName = this.inputObject["system"].dbName;
    this.tableRows = [];
    this.descriptionRows = [];
    this.convectorSelection = `${this.query} WHERE height =
                                ${this.inputObject["formValues"].height}`;

    this.finnedSelection = `SELECT name AS artno,
                            c${this.inputObject["formValues"].return} AS wpm_nom,
                            tubes FROM article WHERE name LIKE
                            '${this.inputObject["formValues"].flow}${this.inputObject["formValues"].room}%'`;

    this.getTableRows(this.inputObject);
  }

  getTableRows(inputObject){
    if (this.databaseName === "Convectors.sqlite"){
      this.query = this.convectorSelection;
    }
    if (this.databaseName === "Finned.sqlite"){
      this.query = this.finnedSelection;
    }
    let getTableRows = this.dataService.getData(this.databaseName, this.query);
    let getDescRows = this.dataService.getData(this.databaseName, this.descriptionQuery);

    Promise.all([getTableRows, getDescRows])
    .then((rows)=>{
      rows[0].forEach((row)=>{
        this.tableRows.push(this.calculationService.setTableRow(row, this.inputObject));
      });
      rows[1].forEach((row)=>{
        this.descriptionRows.push(row);
      });
    })
    .catch(this.errorMessage);
  }

  errorMessage(error){
    this.error = error;
  }
}
