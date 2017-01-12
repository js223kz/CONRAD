import { Component, EventEmitter, Output } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ConstantService } from '../providers/constant-service';

@Component({
  selector: 'system-dropdown',
  template: `<ion-item>
              <ion-label>Värmesystem</ion-label>
              <ion-select (ionChange)=onChange($event) reguired>
                <ion-option  *ngFor="let key of heatSystems"
                  [value]="key.dbName"
                  [selected]="key.dbName == this.defaultSelected">
                  {{key.displayName}}
                </ion-option>
              </ion-select>
            </ion-item>`
})

export class SystemDropdown {
  heatSystems: Object[] = [];
  defaultSelected: String;
  @Output() selectedHeatSystem = new EventEmitter<String>();

  constructor(platform: Platform, public constantService: ConstantService) {

    this.heatSystems = constantService.HEATSYSTEMS;
    this.defaultSelected = this.heatSystems[0]["dbName"];

    platform.ready().then(() => {
      this.onChange(this.defaultSelected);
    });
  }

  onChange(selected){
    this.selectedHeatSystem.emit(selected);
  }
}
