
import { Component} from '@angular/core';

@Component({
  selector: 'print-component',
  template: `<ion-buttons start>
              <button class="action-btn" ion-button icon-only
              (click)="print()">
                <ion-icon ios="ios-print" md="md-print"></ion-icon>
              </button>
            </ion-buttons>`,
})
export class PrintComponent {

  constructor() {

  }

  print(){
    let page = document.getElementById('table-wrapper').innerHTML;

    console.log("PAGE: " + page)

  }

}





/*$scope.printTable = ()=>{
              let page = document.getElementById('calc-table').innerHTML;
              cordova.plugins.printer.print(page, 'Document.html', (res)=> {
                    alert(res ? 'Utskriften klar' : 'Utskriften avbruten');
                });
            }
            $scope.print = ()=>{
              document.addEventListener('deviceready', function () {
                cordova.plugins.printer.check((avail, count)=> {
                   if(avail){
                    $scope.printTable();
                  }else{
                    alert("Enheten har ingen utskriftsfunktion.");
                  }
                });
              }, false);
            }*/
