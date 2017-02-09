import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../pages/contact/contact';
import { ContactService } from '../pages/contact/providers/contact.service';


@Component({
  selector: 'con-footer',
  template: `
            <ion-footer id="footer">
              <ion-toolbar>
                <ion-buttons start>
                  <button *ngIf="showHomeBtn" ion-button icon-only (click)="showContactPage()">
                    <ion-icon ios="ios-home" md="md-home"></ion-icon>
                  </button>
                  <button *ngIf="!showHomeBtn" ion-button icon-only (click)="sendEmail()">
                    <ion-icon name="mail"></ion-icon>
                  </button>
                </ion-buttons>

                <ion-title id="footer-title">VVS Agenturer AB</ion-title>

                <ion-buttons end hideWhen="ipad">
                  <button ion-button icon-only (click)="makeCall()">
                    <ion-icon ios="ios-call" md="md-call"></ion-icon>
                  </button>
                </ion-buttons>
              </ion-toolbar>
            </ion-footer>
            `,
            styles: [`
                      #footer {
                        width: 100%;
                        height: auto;
                      }`
                    ],
  entryComponents:[ ContactPage ],
  providers: [ContactService]
})

export class Footer {
  @Input() showHomeBtn: boolean;

  constructor(public navctrl: NavController,
              public emailService: ContactService) {
  }

  showContactPage(){
    this.navctrl.push(ContactPage)
  }

  sendEmail(){
    this.emailService.sendEmail();
  }

  makeCall(){
    console.log("make call");
  }

}
