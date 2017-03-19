import { Component, Input} from '@angular/core';


@Component({
  selector: 'infobox',
  template: `<div style="width:80%; height:auto; background-color:orange; border-radius:5px; margin-left:10%;">
              <div style="margin-left:5%; margin-top:5%; margin-bottom:5%">
                <button (click)="closeInfoBox()">Stäng</button>
                <ion-label>{{inputObject["system"].dbName}}</ion-label>
                <ion-label>{{inputObject["formValues"].flow}}</ion-label>
                <ion-label>{{inputObject["formValues"].return}}</ion-label>
                <ion-label>{{inputObject["formValues"].room}}</ion-label>
                <ion-label>{{inputObject["formValues"].effect}}</ion-label>
                <ion-label>{{inputObject["formValues"].length}}</ion-label>
                <ion-label>{{inputObject["formValues"].height}}</ion-label>
              </div>
            </div>`,
            styles: [`
                      `
                    ]

})

export class InfoboxComponent {

  @Input() inputObject: Object;

  constructor() {

  }
  closeInfoBox(){

  }

}
