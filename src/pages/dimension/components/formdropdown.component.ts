import { Component, EventEmitter, Output } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ConstantService } from '../providers/constant.service';

@Component({
  selector: 'form-dropdown',
  templateUrl: 'formdropdown.component.html',

})

export class FormDropDown {
  heatSystems: Object[];
  defaultSelected: string;
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
