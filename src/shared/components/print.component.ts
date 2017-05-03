
import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'print-component',
  template: `<ion-buttons start>
              <button class="action-btn" ion-button icon-only
              (click)="print()">
                <ion-icon ios="ios-print" md="md-print"></ion-icon>
              </button>
            </ion-buttons>`
})
export class PrintComponent {
  @Input() tableRows: any [];
  @Input() descriptionRows: any [];

  constructor(public platform: Platform) {}

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
    let htmlCode = `<html>
                      <body>
                      <table style="width: 650px;
                      margin-right: 30px;
                      margin-left: 50px;
                      display: table;">
                        <tr style="border-bottom: 1px solid #c6c6c6;
                                    padding-top: 2%;
                                    padding-bottom: 2%;">
                          <td class="column-1">
                          </td>
                          <td class="column-2">
                            <label style="font-weight: bold;">Konvektortyp</label>
                          </td>
                          <td class="column-3">
                            <label style="font-weight: bold;">Längd</label>
                          </td>
                          <td class="column-4">
                            <label style="font-weight: bold;">Effekt</label>
                          </td>
                          <td class="column-5">
                            <label style="font-weight: bold;">Längd</label>
                          </td>
                          <td class="column-6">
                            <label style="font-weight: bold;">Effekt<label>
                          </td>
                        </tr>
                       `;


                       this.tableRows.forEach((row)=>{
                           htmlCode += `<tr style="border-bottom: 1px solid #c6c6c6;
                                              padding-top: 2%;
                                              padding-bottom: 2%;
                                              display: table-row;">
                                          <td style="display: table-cell;">`;

                          if(row[0]){
                            row[0].forEach((tube)=>{
                              if(tube === '0' || tube === 'Z'){
                                htmlCode +=`<div style="width:5px;
                                                height:4px;
                                                margin-left:3px;
                                                float: left;
                                                background: url('assets/img/black.png');"></div>`;
                              }
                              if(tube === '1'){
                                htmlCode +=`<div style="width:5px;
                                                height:10px;
                                                margin-left:3px;
                                                float: left;
                                                background: url('assets/img/red.png');"></div>`;
                              }
                              if(tube === 'W'){
                                htmlCode +=`<div style="width:5px;
                                                height:10px;
                                                margin-left:3px;
                                                float: left;
                                                background: url('assets/img/blue.png');"></div>`;
                              }
                              if(tube === 'F'){
                                htmlCode +=`<div style="width:5px;
                                                height:10px;
                                                margin-left:3px;
                                                float: left;
                                                background: url('assets/img/grey.png');"></div>`;
                              }
                              if(tube === 'G'){
                                htmlCode +=`<div style="width:5px;
                                                height:10px;
                                                margin-left:3px;
                                                float: left;
                                                background: url('assets/img/lightgrey.png');"></div>`;
                              }
                              if(tube === 'C'){
                                htmlCode +=`<div style="width:5px;
                                                height:10px;
                                                margin-left:3px;
                                                float: left;
                                                background: url('assets/img/red_black.png');"></div>`;
                              }
                              if(tube === 'X'){
                                htmlCode +=`<div style="width:5px;
                                                height:10px;
                                                margin-left:3px;
                                                float: left;
                                                background: url('assets/img/lightgrey_black.png');"></div>`;
                              }
                            });

                          }

                           htmlCode +=`</td>`;

                           if(row[1] !== null){
                             htmlCode +=`<td style="display: table-cell;">
                                             ${row[1]}
                                           </td>`;
                          }else{
                            htmlCode +=`<td style="display: table-cell;">

                                          </td>`;
                          }
                           if(row[2] !== null){
                             htmlCode +=`<td style="display: table-cell;">
                                             ${row[2]}
                                           </td>`;
                           }else{
                             htmlCode +=`<td style="display: table-cell;">
                                           </td>`;
                           }
                           if(row[3] !== null){
                             htmlCode +=`<td style="display: table-cell;">
                                             ${row[3]}
                                           </td>`;
                          }else{
                            htmlCode +=`<td style="display: table-cell;">
                                          </td>`;
                          }
                           if(row[4] !== null){
                             htmlCode +=`<td style="display: table-cell;">
                                             ${row[4]}
                                           </td>`;
                          }else{
                            htmlCode +=`<td style="display: table-cell;">
                                          </td>`;
                          }
                           if(row[5] !== null){
                             htmlCode +=`<td style="display: table-cell;">
                                             ${row[5]}
                                           </td>`;
                           }

                    htmlCode +=`</tr>`
                  })
                  htmlCode +=`<div style="margin-top: 40px;">`;
                      this.descriptionRows.forEach((descRow)=>{
                          if(descRow.tube){
                            htmlCode +=`<tr style="display: table-row; float: left; width: 650px">`;
                            if(descRow.tube === '0' || descRow.tube === 'Z'){
                              htmlCode +=`<td style="display: table-cell;
                                                width: 150px; float:left;">
                                            <div style="width:5px;
                                                height:4px;
                                                margin-left:3px;
                                                background: url('assets/img/black.png');">
                                            </div>
                                          </td>`;
                            }
                            if(descRow.tube === '1'){
                              htmlCode +=`<td style="display: table-cell;
                                                width: 150px; float:left;">
                                              <div style="width:5px;
                                                  height:10px;
                                                  margin-left:3px;
                                                  background: url('assets/img/red.png');">
                                              </div>
                                          </td>`;
                            }
                            if(descRow.tube === 'W'){
                              htmlCode +=`<td style="display: table-cell;
                                                width: 150px; float:left;">
                                            <div style="width:5px;
                                                  height:10px;
                                                  margin-left:3px;
                                                  background: url('assets/img/blue.png');">
                                            </div>
                                          </td>`;
                            }
                            if(descRow.tube === 'F'){
                              htmlCode +=`<td style="display: table-cell;
                                                width: 150px;
                                                float:left;">
                                            <div style="width:5px;
                                                  height:10px;
                                                  margin-left:3px;
                                                  background: url('assets/img/grey.png');">
                                            </div>
                                          </td>`;
                            }
                            if(descRow.tube === 'G'){
                              htmlCode +=`<td style="display: table-cell;
                                                width: 150px; float:left;">
                                            <div style="width:5px;
                                                  height:10px;
                                                  margin-left:3px;
                                                  background: url('assets/img/lightgrey.png');">
                                            </div>
                                          </td>`;
                            }
                            if(descRow.tube === 'C'){
                              htmlCode +=`<td style="display: table-cell;
                                                width: 150px; float:left;">
                                            <div style="width:5px;
                                                  height:10px;
                                                  margin-left:3px;
                                                  background: url('assets/img/red_black.png');">
                                            </div>
                                          </td>`;
                            }
                            if(descRow.tube === 'X'){
                              htmlCode +=`<td style="display: table-cell;
                                                width: 150px;
                                                float:left;">
                                            <div style="width:5px;
                                                  height:10px;
                                                  margin-left:3px;
                                                  background: url('assets/img/lightgrey_black.png');">
                                            </div>
                                          </td>`;
                            }
                            htmlCode +=`<td>
                                          ${descRow.desc}
                                        </td>
                                      </tr>`
                          }else{
                            htmlCode +=`<tr style="width: 650px;">
                                          <td>
                                            ${descRow.desc}
                                          </td>
                                        </tr>`
                          }

                      });

                htmlCode += `</div>
                          </table>
                        </body>
                      </html>`;



    (<any>window).cordova.plugins.printer.print(htmlCode, 'conrad.html',
      (res)=> {

    });
  }
}
