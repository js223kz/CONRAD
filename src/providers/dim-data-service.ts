import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';


@Injectable()
export class DimDataService {

  private db:any;
  constructor() {
    this.db = new SQLite();
  }

  public getData(database, query):any{
    return new Promise((resolve, reject)=>{
      this.db.openDatabase({
          name: database,
          location:0,

          }).then(() => {
            this.db.executeSql(query, {}).then((res) => {
              resolve(res.rows);
            }, (err) => {
              reject("Unable to execute sql");
            });
          }, (err) => {
            reject('Unable to open database: ');

      });
    })

  }
}
