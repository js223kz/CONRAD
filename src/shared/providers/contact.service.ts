import { Injectable } from '@angular/core';
import { EmailComposer } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { ConstantService } from './constant.service';

@Injectable()
export class ContactService {

  constructor(public platForm: Platform, public constantService: ConstantService) {
  }

  sendEmail(){
    console.log("send email");
    this.platForm.ready().then(() => {
      (<any>window).cordova.plugins.email.isAvailable((isAvailable, withScheme)=>{
            if(isAvailable){
              (<any>window).cordova.plugins.email.open({
                to: ["johanna@bythebeach.se"],
              },((res)=>{
                  alert('E-post skickat');
              }));

            }else{
              alert("Enheten har ingen e-postfunktion.");
            }
        });
    });
  }
}
