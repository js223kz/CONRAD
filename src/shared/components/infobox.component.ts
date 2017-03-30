import { Component, Input} from '@angular/core';


@Component({
  selector: 'infobox',
  template: `<div>
              <ion-toolbar style="width:100%" class="page-title-wrapper">
                <ion-buttons end>
                  <button class="action-btn" ion-button icon-only
                          (click)="toggleInfoBox()">
                    <ion-icon ios="ios-arrow-dropdown-circle"
                              md="md-arrow-dropdown-circle">
                    </ion-icon>
                  </button>
                </ion-buttons>
              </ion-toolbar>
              <div *ngIf="infoboxVisible" style="width:80%; height:auto; background-color:#7f7f7f; border-radius:5px; margin-left:10%;">
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
  infoboxVisible: boolean = false;
  @Input() inputObject: Object;

  constructor() {

  }
  toggleInfoBox(){
    if(this.infoboxVisible){
      this.infoboxVisible = false;
    }else{
      this.infoboxVisible = true;
    }
  }
}
