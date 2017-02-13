import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dimension-table',
  templateUrl: 'dimension-table.html'
})
export class DimensionTablePage {

  constructor(public navParams: NavParams) {
    console.log(navParams.get('data'));
    console.log(navParams.get('system'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DimensionTablePage');
  }

}
