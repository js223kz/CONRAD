import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class DataService {

  private db: any;
  constructor() {
    this.db = new SQLite();
  }

  public getData(database: String, query: String): any{
    return new Promise((resolve, reject)=>{
      let data: any[] = [];
      this.db.openDatabase({
        name: database,
        location:0,

        }).then(() => {
          this.db.executeSql(query, {}).then((res) => {
            if(res.rows.length > 0) {
              for (let i = 0; i < res.rows.length; i++) {
                data.push(res.rows.item(i));
              }
              resolve(data);
            } else {
              reject("Empty database");
            }
          }, (err) => {
            reject('Unable to execute sql');
          });
        }, (err) => {
          reject('Unable to open database');
      });
    });
  }
}
