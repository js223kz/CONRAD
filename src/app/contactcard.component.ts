import { Component} from '@angular/core';
import { ViewController} from 'ionic-angular';

@Component({
  selector: 'contact-card',
  template: `
              <ion-card>
                <ion-card-header>
                Information
                </ion-card-header>
                <ion-card-content>
                <p>
                    This is an example of what your application could look
                    like with Ionic 2.  If you choose to
                    <strong>dismiss</strong> this notification, it will
                    not be shown again for this session.  No data
                    is persisted in this application.
                </p>
                <ion-buttons end>
                    <button primary (click)="dismiss()">
                        Dismiss
                    </button>
                </ion-buttons>
                </ion-card-content>
            </ion-card>
            `
})
export class ContactCard {
  constructor(private viewCtrl: ViewController) {

  }

  dismiss() {
     this.viewCtrl.dismiss();
   }

}
