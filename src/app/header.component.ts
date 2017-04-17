import { Component} from '@angular/core';

@Component({
  selector: 'con-header',
  template: `
              <ion-navbar id="header-container" color="none">
                <img id="header-logo"
                      src="./assets/img/logo.jpg"
                      alt="Logotype" />
              </ion-navbar>
            `,
            styles: [`
                      #header-container {
                        width: 100%;
                        height: auto;
                        overflow: hidden;
                      }
                      #header-logo{
                        height: auto;
                        max-width: 50%;
                        float: right;
                      }`
                    ]
})
export class Header {

  constructor() {

  }

}
