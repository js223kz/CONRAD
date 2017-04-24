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
      let rows: any[] = [];
      this.db.openDatabase({
        name: database,
        location:"default",

        }).then(() => {
          this.db.executeSql(query, {}).then((res) => {
            if(res.rows.length > 0) {
              for (let i = 0; i < res.rows.length; i++) {
                rows.push(res.rows.item(i));
              }
              resolve(rows);
            } else {
              reject("Databasen är tom: Prova att starta om appen.");
            }
          }, (err) => {
            reject('Får ingen kontakt med databasen. Prova att starta om appen.');
          });
        }, (err) => {
          reject('Kan inte öppna databasen. Prova att starta om appen.');
      });
    });
  }
}
