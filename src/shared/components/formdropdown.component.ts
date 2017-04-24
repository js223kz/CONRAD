import { EventEmitter, Output, Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ConstantService } from '../providers/constant.service';

@Component({
  selector: 'form-dropdown',
  template: `<div id="system-dropdown-wrapper">
              <ion-select id="dropdown-select" (ionChange)=onChange($event) required>
                <ion-option text-wrap *ngFor="let i of heatSystems"
                  [value]="i"
                  [selected]="i.dbName == this.defaultSelected">
                  {{i.displayName}}
                </ion-option>
              </ion-select>
            </div>`,
            styles: [`
                      #system-dropdown-wrapper{
                        border-top: 1px solid #ccc;
                        border-bottom: 1px solid #ccc;
                        margin-bottom: 20px;
                      }
                      #dropdown-select{
                        max-width: 100% !important;
                      }`
                    ]

})

export class FormDropDown {
  heatSystems: Object[];

  defaultSelected: Object;
  @Output() selectedHeatSystem = new EventEmitter<Object>();

  constructor(platform: Platform, public constantService: ConstantService) {
    this.heatSystems = constantService.HEATSYSTEMS;
    this.defaultSelected = this.heatSystems[0]["dbName"];
  }

  onChange(selected){
    this.selectedHeatSystem.emit(selected);
  }
}
