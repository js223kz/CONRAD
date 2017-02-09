import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styles: [`
            #contact-wrapper:
              width: 50%;
              height: 50%;
              background-color: red;`]
})
export class ContactPage {

  constructor(private viewCtrl: ViewController) {}

  dismiss() {
     this.viewCtrl.dismiss();
   }
}
