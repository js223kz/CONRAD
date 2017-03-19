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
  selection: string;
  tableRows: any [];
  infoboxVisible: boolean = false;
  inputObject: Object;

  constructor(private navParams: NavParams,
              private dataService: DataService,
              private calculationService: CalculationService) {

    this.inputObject = navParams.get('inputObject');
    this.pageTitle = this.inputObject["system"].displayName;
    this.databaseName = this.inputObject["system"].dbName;
    this.tableRows = [];
    this.selection = `${this.query} WHERE height =
                      ${this.inputObject["formValues"].height}`;
    this.calculate(this.inputObject);

  }

  calculate(inputObject){
    if (this.databaseName === "Convectors.sqlite"){
      this.query = this.selection;
    }
    console.log(this.query);
    this.dataService.getData(this.databaseName, this.query)
    .then((dbRows)=>{
      dbRows.forEach((row)=>{
        this.tableRows.push(this.calculationService.setTableRow(row, this.inputObject));

      });
    })
    .catch(this.errorMessage);
  }

  errorMessage(error){
    console.log(JSON.stringify("error: " + error));
  }

  showInfoBox(){
    this.infoboxVisible = true;
  }


}
