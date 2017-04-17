
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
    let styleCode = `<html>
                      <head>
                        <link rel="stylesheet" href="assets/print.css" media="print">
                      </head>
                      <body>
                      <table class="table-wrapper">
                        <tr class="table-row">
                          <td class="column-1">
                          </td>
                          <td class="column-2">
                            <label>Konvektortyp</label>
                          </td>
                          <td class="column-3">
                            <label>Längd</label>
                          </td>
                          <td class="column-4">
                            <label>Effekt</label>
                          </td>
                          <td class="column-5">
                            <label>Längd</label>
                          </td>
                          <td class="column-6">
                            <label>Effekt<label>
                          </td>
                        </tr>
                       `;


                       this.tableRows.forEach((row)=>{
                           styleCode += `<tr class="table-row">
                                          <td class="column-1">`;

                          if(row[0]){
                            row[0].forEach((tube)=>{
                              if(tube === '0' || tube === 'Z'){
                                styleCode +=`<div style="width:5px; height:4px; margin-left:3px; float: left; background: url('assets/img/black.png');"></div>`;
                              }
                              if(tube === '1'){
                                styleCode +=`<div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/red.png');"></div>`;
                              }
                              if(tube === 'W'){
                                styleCode +=`<div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/blue.png');"></div>`;
                              }
                              if(tube === 'F'){
                                styleCode +=`<div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/grey.png');"></div>`;
                              }
                              if(tube === 'G'){
                                styleCode +=`<div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/lightgrey.png');"></div>`;
                              }
                              if(tube === 'C'){
                                styleCode +=`<div style="width:5px; height:10px;  margin-left:3px; float: left; background: url('assets/img/red_black.png');"></div>`;
                              }
                              if(tube === 'X'){
                                styleCode +=`<div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/lightgrey_black.png');"></div>`;
                              }
                            });

                          }

                           styleCode +=`</td>`;

                           if(row[1] !== null){
                             styleCode +=`<td class="column-2">
                                             ${row[1]}
                                           </td>`;
                          }else{
                            styleCode +=`<td class="column-2">

                                          </td>`;
                          }
                           if(row[2] !== null){
                             styleCode +=`<td class="column-3">
                                             ${row[2]}
                                           </td>`;
                           }else{
                             styleCode +=`<td class="column-3">
                                           </td>`;
                           }
                           if(row[3] !== null){
                             styleCode +=`<td class="column-4">
                                             ${row[3]}
                                           </td>`;
                          }else{
                            styleCode +=`<td class="column-4">
                                          </td>`;
                          }
                           if(row[4] !== null){
                             styleCode +=`<td class="column-5">
                                             ${row[4]}
                                           </td>`;
                          }else{
                            styleCode +=`<td class="column-6">
                                          </td>`;
                          }
                           if(row[5] !== null){
                             styleCode +=`<td class="column-6">
                                             ${row[5]}
                                           </td>`;
                           }

                    styleCode +=`</tr>`;
                  })

                      this.descriptionRows.forEach((descRow)=>{
                        console.log(descRow);

                          if(descRow.tube){
                            styleCode +=`<tr>`;
                            if(descRow.tube === '0' || descRow.tube === 'Z'){
                              styleCode +=`<td class="description-tube"><div style="width:5px; height:4px; margin-left:3px; float: left; background: url('assets/img/black.png');"></div></td>`;
                            }
                            if(descRow.tube === '1'){
                              styleCode +=`<td class="description-tube"><div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/red.png');"></div></td>`;
                            }
                            if(descRow.tube === 'W'){
                              styleCode +=`<td class="description-tube"><div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/blue.png');"></div></td>`;
                            }
                            if(descRow.tube === 'F'){
                              styleCode +=`<td class="description-tube"><div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/grey.png');"></div></td>`;
                            }
                            if(descRow.tube === 'G'){
                              styleCode +=`<td class="description-tube"><div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/lightgrey.png');"></div></td>`;
                            }
                            if(descRow.tube === 'C'){
                              styleCode +=`<td class="description-tube"><div style="width:5px; height:10px;  margin-left:3px; float: left; background: url('assets/img/red_black.png');"></div></td>`;
                            }
                            if(descRow.tube === 'X'){
                              styleCode +=`<td class="description-tube"><div style="width:5px; height:10px; margin-left:3px; float: left; background: url('assets/img/lightgrey_black.png');"></div></td>`;
                            }
                            styleCode +=`<td class="tube-text">${descRow.desc}</td></tr>`
                          }else{
                            styleCode +=`<tr><td class="description-text">${descRow.desc}</td></tr>`
                          }

                      });

                styleCode += `</table>
                            </body>
                          </html>`;



    (<any>window).cordova.plugins.printer.print(styleCode, 'conrad.html',
    (res)=> {
        alert(res ? 'Utskriften klar' : 'Utskriften avbruten');
      });
  }
}
