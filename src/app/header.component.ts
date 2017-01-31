import { Component} from '@angular/core';

@Component({
  selector: 'con-header',
  template: `
            <ion-header>
              <ion-toolbar id="header-container" color="none">
                <img id="header-logo"
                      src="/assets/images/logo.jpg"
                      alt="Logotype" />
              </ion-toolbar>

            </ion-header>
            `,
            styles: [`
                      #header-container {
                        width: 100%;
                        height: auto;
                        float: left;
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
