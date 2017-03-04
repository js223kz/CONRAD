import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import { DropDownControl } from '../models/formcontrol.model';
import { InputControl } from '../models/formcontrol.model';

@Injectable()
export class DataService {

  private db: any;
  constructor() {
    this.db = new SQLite();
  }

  public getData(database: String, query: String): any{
    console.log("getdata: " + database);
    return new Promise((resolve, reject)=>{
      let data: any[] = [];
      this.db.openDatabase({
        name: database,
        location:0,

        }).then(() => {
          this.db.executeSql(query, {}).then((res) => {
            if(res.rows.length > 0) {
              for (let i = 0; i < res.rows.length; i++) {
                console.log("steps: " + res.rows.item(i).steps);
                if(res.rows.item(i).steps == null){
                  data.push(new InputControl(res.rows.item(i)));
                }else{
                  data.push(new DropDownControl(res.rows.item(i)));
                }
              }
            } else {
              reject("Empty database");
            }
              resolve(data);
          }, (err) => {
            reject('Unable to execute sql');
          });
        }, (err) => {
          reject('Unable to open database');
      });
    });
  }

  public getTableData(){

  }
}
