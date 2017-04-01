import { Component, Input} from '@angular/core';


@Component({
  selector: 'infobox',
  template: `
              <div>
              <ion-toolbar class="infobox-dropdown">
              <ion-label class="ion-title" start>
                {{inputObject["system"].displayName}}
              </ion-label>
                <ion-buttons end>
                  <button class="action-btn arrow-down-btn" ion-button icon-only
                          (click)="toggleInfoBox()">
                    <ion-icon ios="ios-arrow-dropdown-circle"
                              md="md-arrow-dropdown-circle">
                    </ion-icon>
                  </button>
                </ion-buttons>
              </ion-toolbar>
              </div>
              <div *ngIf="infoboxVisible" class="infotext-wrapper">
                <div class="info-text">
                <ion-row class="info-text-row">
                  <ion-label>System: </ion-label>
                  <ion-label>{{inputObject["system"].displayName}}</ion-label>
                </ion-row>
                <ion-row class="info-text-row">
                  <ion-label>Tillopp: </ion-label>
                  <ion-label>{{inputObject["formValues"].flow}}</ion-label>
                </ion-row>
                <ion-row class="info-text-row">
                  <ion-label>Retur: </ion-label>
                  <ion-label>{{inputObject["formValues"].return}}</ion-label>
                </ion-row>
                <ion-row class="info-text-row">
                  <ion-label>Rum: </ion-label>
                  <ion-label>{{inputObject["formValues"].room}}</ion-label>
                </ion-row>
                <ion-row class="info-text-row">
                  <ion-label>Effekt: </ion-label>
                  <ion-label>{{inputObject["formValues"].watt}}</ion-label>
                </ion-row>
                <ion-row class="info-text-row">
                  <ion-label>Längd: </ion-label>
                  <ion-label>{{inputObject["formValues"].length}}</ion-label>
                </ion-row>
                <ion-row class="info-text-row">
                  <ion-label>Höjd: </ion-label>
                  <ion-label>{{inputObject["formValues"].height}}</ion-label>
                </ion-row>
                </div>
              </div>`,
            styles: [`.infobox-dropdown{
                        width: 100%;
                        border-top: 1px solid lightgrey;
                        border-bottom: 1px solid lightgrey;
                      }
                      .infotext-wrapper{
                        width: 80%;
                        margin-left: 10%;
                        margin-top: 10%;
                        background-color: #f7f7f7;
                        height: auto;
                        border-radius: 5px;
                      }
                      .arrow-down-btn{
                        font-size: 18px;
                      }
                      .info-text{
                        padding: 5%;
                      }
                      .info-text-row{
                        font-size: 3vw;
                        margin-top: -15px;
                      }
                      .ion-title{
                        margin-left: 10px;
                        font-weight: 600;
                      }
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
