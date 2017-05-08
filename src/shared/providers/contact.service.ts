import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ConstantService } from './constant.service';

@Injectable()
export class ContactService {
  emailAddress: string;
  constructor(public platForm: Platform,
              public constantService: ConstantService) {
    this.emailAddress = constantService.EMAILADDRESS;
  }

  sendEmail(){
    this.platForm.ready().then(() => {
      (<any>window).cordova.plugins.email.isAvailable((isAvailable, withScheme)=>{
            if(isAvailable){
              (<any>window).cordova.plugins.email.open({
                to: [this.emailAddress],
              },((res)=>{
                  //e-post skickat
              }));

            }else{
              alert("Enheten har ingen e-postfunktion.");
            }
        });
    });
  }
}
