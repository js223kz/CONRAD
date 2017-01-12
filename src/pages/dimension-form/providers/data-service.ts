import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import { FormRow } from '../models/form-row';



@Injectable()
export class DataService {

  private db: any;
  constructor() {
    this.db = new SQLite();
  }

  public getData(database: String, query: String): any{
    return new Promise((resolve, reject)=>{
      let data: FormRow[] = [];
      this.db.openDatabase({
        name: database,
        location:0,

        }).then(() => {
          this.db.executeSql(query, {}).then((res) => {

            if(res.rows.length > 0) {
              for (let i = 0; i < res.rows.length; i++) {
                data.push(
                  new FormRow(res.rows.item(i))
                )
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
}
