
import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { PrintTemplateService } from '../providers/print-template.service';


@Component({
  selector: 'print-component',
  template: `<ion-buttons start>
              <button class="action-btn" ion-button icon-only
              (click)="print()">
                <ion-icon ios="ios-print" md="md-print"></ion-icon>
              </button>
            </ion-buttons>`,
  providers: [PrintTemplateService]
})
export class PrintComponent {
  @Input() tableRows: any [];
  @Input() descriptionRows: any [];

  constructor(public platform: Platform,
              public printTemplateService: PrintTemplateService) {}

  print(){
    this.platform.ready().then(() => {
       (<any>window).cordova.plugins.printer.check((avail, count)=> {
         if(avail){
          this.printTable();
        }else{
          alert("Enheten har ingen utskriftsfunktion.");
        }
      });
    });
  }

  printTable(){
    let htmlCode = this.printTemplateService.getTemplate(this.descriptionRows, this.tableRows);
    (<any>window).cordova.plugins.printer.print(htmlCode, 'conrad.html',
      (res)=> {
        //page printed
    });
  }
}
