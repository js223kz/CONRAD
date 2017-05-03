import { Injectable } from '@angular/core';

@Injectable()
export class DbCloneService {

  constructor() {}

  cloneDatabases(databases){
   return new Promise((resolve, reject)=>{
     databases.forEach((db)=>{
       (<any>window).plugins.sqlDB.copy(db, 0, this.success, this.error)
    });
   })
  }

  success(){
    return 'Databas kopierad';
  }

  error(error){
    if(error.code == 516){
      return 'Databas finns redan';
    }else{
      throw new Error('Databasfel: kan inte kopieras till denna enhet.');
    }
  }
}
