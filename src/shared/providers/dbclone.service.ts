import { Injectable } from '@angular/core';

@Injectable()
export class DbCloneService {

  constructor() {}

  cloneDatabases(databases){
    return new Promise((resolve, reject)=>{
     databases.forEach((db)=>{
      let cloned = (<any>window).plugins.sqlDB.copy(db, 0, this.success, this.error);
      if(cloned){
        resolve();
      }else{
        reject();
      }
    });
  });
  }

  success(){
    return true;
  }

  error(error){
    if(error.code == 516){
      return true;
    }else{
      return false;
    }
  }
}
