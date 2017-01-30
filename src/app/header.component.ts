import { Component} from '@angular/core';

@Component({
  selector: 'con-header',
  template: `<ion-header>
              <ion-navbar>
              <button ion-button icon-only menuToggle>
                <ion-icon name="menu"></ion-icon>
              </button>
              <button ng-click="goBack()">
              </button>
              <img src="../images/logo.jpg" alt="Logotype"
              style="width: 100px; height: 29px; position: fixed; right: 3%;">
              </ion-navbar>
            </ion-header>
            `,
            styles: [`

  `],
})
export class Header {

  constructor() {

  }

}
