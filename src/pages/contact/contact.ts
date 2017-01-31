import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private viewCtrl: ViewController) {}

  dismiss() {
     this.viewCtrl.dismiss();
   }
}
