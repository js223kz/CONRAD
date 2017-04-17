
import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'email-component',
  template: `<ion-buttons end>
                <button class="action-btn email" ion-button icon-only
                (click)="sendEmail()">
                  <ion-icon ios="ios-mail" md="md-mail">
                  </ion-icon>
                </button>
              </ion-buttons>`,
              styles: [`
                        .action-btn{
                          font-size: 23px;
                          color: #7F7F7F;
                        }
                        .email{
                          font-size: 25px !important;
                        }`
                      ],
})
export class EmailComponent {

  constructor(public platform: Platform) {

  }

  sendEmail(){
    console.log("send email");
    let tablePage = document.getElementById('table-wrapper').innerHTML;
    this.platform.ready().then(() => {

      (<any>window).cordova.plugins.email.isAvailable((isAvailable, withScheme)=>{
            if(isAvailable){
              (<any>window).cordova.plugins.email.open({
                to:          [""],
                subject:   " Tabell från Conrad Värme",
                body:       tablePage,
                isHtml:    true,
              },((res)=>{
                  alert(res ? 'E-post skickat' : 'E-post avbruten');
              }));

            }else{
              alert("Enheten har ingen e-postfunktion.");
            }
        });
    });
  }
}