import { Injectable } from '@angular/core';
import { EmailComposer } from 'ionic-native';
import { ConstantService } from '../../../app/constant.service';

@Injectable()
export class ContactService {
  constService: ConstantService;

  constructor() {
  }

  public sendEmail(){

    EmailComposer.isAvailable()
    .then((available: boolean) =>{
      if(available) {
        let email = {
           to: this.constService.EMAILADDRESS,
          };

      EmailComposer.open(email);

      }else{
        console.log("email is not available");
      }
    });
  }
}
