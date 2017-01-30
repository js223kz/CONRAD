import { Component} from '@angular/core';

@Component({
  selector: 'con-footer',
  template: `<ion-footer class="bar-footer">
              <ion-toolbar>
                <ion-buttons start>
                  <button>
                    <ion-icon ios="ios-home" md="md-home"></ion-icon>
                  </button>
                </ion-buttons>
                <h1 class="title" center>VVS Agenturer AB</h1>
                <ion-buttons end>
                    <a href="tel:+46705266130">
                    <button>
                      <ion-icon ios="ios-call" md="md-call"></ion-icon>
                    </button>
                  </a>
                </ion-buttons>
              </ion-toolbar>
            </ion-footer>
          `
})

export class Footer {

  constructor() {

  }

}
