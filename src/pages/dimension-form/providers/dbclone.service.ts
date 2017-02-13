import { Injectable } from '@angular/core';

@Injectable()
export class DbCloneService {

  constructor() {
  }

  cloneDatabases(databases){
    return new Promise((resolve, reject)=>{
      databases.forEach((db)=>{
        (<any>window).plugins.sqlDB.copy(db, 0, this.success, this.error);
      });
    });
  }

  success(){
    console.log("databas kopierad");
  }

  error(error){
      if(error.code == 516){
        console.log("Databas finns redan");
      }else{
        console.log("Kunde inte kopiera databas")
      }
  }
}
