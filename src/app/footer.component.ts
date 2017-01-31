import { Component} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ContactPage } from '../pages/contact/contact';



@Component({
  selector: 'con-footer',
  template: `
            <ion-footer class="bar-footer">
              <ion-toolbar>
                <ion-buttons start>
                  <button ion-button icon-only (click)="showContactPage()">
                    <ion-icon ios="ios-home" md="md-home"></ion-icon>
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
  entryComponents:[ ContactPage ]
})

export class Footer {
  clickedCall: boolean = false;

  constructor(public modalCtrl: ModalController) {
  }

  showContactPage(){
    let modal = this.modalCtrl.create(ContactPage);
    modal.present(modal);
  }

  makeCall(){
    console.log("make call");
  }

}
