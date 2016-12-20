import { Injectable } from '@angular/core';
import { DATABASES } from '../app/constants';

@Injectable()
export class DbCloneService {
  private databases: string[] = DATABASES

  constructor() {

  }

  cloneDatabases(){
    this.databases.forEach((db)=>{
      (<any>window).plugins.sqlDB.copy(db, 0, this.success, this.error);
    });
  }

  success(){
     console.log("success");
  }

  error(error){
    if(error.code == 516){
      console.log("Databas finns redan");
    }else{
      console.log("Kunde inte kopiera databas");
    }
  }
}
