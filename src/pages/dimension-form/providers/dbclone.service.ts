import { Injectable } from '@angular/core';

@Injectable()
export class DbCloneService {
  constructor() {
  }

  cloneDatabases(databases){
    return new Promise((resolve, reject)=>{
        databases.forEach((db)=>{
          (<any>window).plugins.sqlDB.copy(db, 0, this.success, this.error)
        });
        return;
    });

  }

  success(){
    return new Promise((resolve)=>{
      resolve("Databas kopierad");
    })
  }

  error(error){
    return new Promise((resolve, reject)=>{
      if(error.code == 516){
        resolve("Databas finns redan");
      }else{
        reject("Databasfel: kan inte kopieras till denna enhet.");
      }
    })
  }
}
