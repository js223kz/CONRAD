import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';


@Injectable()
export class PdfService {
  table: string ="";
  constructor(public platform: Platform) {
  }

  createTable(tableRows){
    console.log(window.location.href)
    return new Promise((resolve, reject)=>{
      this.table = `<html>
                    <head>
                    <style>
                    #pdf-table{
                      width: auto;
                      height: auto;
                    }
                    .pdf-table-row{
                      border-bottom: 1px solid black;
                    }
                    .col-1{
                      width: 42%;
                      height: auto;
                    }
                    .col-2{
                      width: 18%;
                      height: auto;
                    }
                    .col-3{
                      width: 5%;
                      height: auto;
                    }
                    th{
                      font-size:14px;
                    }

                    .tube{
                      float: left;
                      margin-left:1px;
                      height: auto;
                      width: auto;
                      padding: 0px;
                    }
                    .tube_0{
                      width: 4px;
                      height: 3px;
                    }
                    .tube_Z{
                      width: 4px;
                      height: 3px;
                      background: url('/assets/images/black.png');
                    }
                    .tube_1{
                      width: 4px;
                      height: 9px;
                      background: url('/assets/images/red.png');
                    }
                    .tube_W{
                      width: 4px;
                      height: 9px;
                      background: url('/assets/images/blue.png');
                    }
                    .tube_F{
                      width: 4px;
                      height: 9px;
                      background: url('/assets/images/grey.png');
                    }
                    .tube_G{
                      width: 4px;
                      height: 9px;
                      background: url('/assets/images/lightgrey.png');
                    }
                    .tube_C{
                      width: 4px;
                      height: 9px;
                      background: url('/assets/images/red_black.png');
                    }
                    .tube_X{
                      width: 4px;
                      height: 9px;
                      background: url('/assets/images/lightgrey_black.png');
                    }
                    </style>
                    </head>`
                  this.table+=`  <body>
                      <table id="pdf-table">
                        <tr>
                        <th class="col-1"></th>
                        <th class="col-2">Konventortyp</th>
                        <th class="col-3">Längd</th>
                        <th class="col-3">Effekt</th>
                        <th class="col-3">Längd</th>
                        <th class="col-3">Effekt</th>
                        </tr>`;

              tableRows.forEach((row)=>{
                this.table +=`<tr class="pdf-table-row">`;
                if(row[0] !== null){
                  this.table +=`<td class="col-1">`;
                  row[0].forEach((bit) => {
                    if(bit==="0"){
                      this.table += `<div class="tube tube_${bit}"
                                      style="width:4px; height:3px; background: url('/www/assets/images/black.png');">
                                      </div>`
                      //this.table += `<img class="tube" src="./assets/images/black.png" height="4px" width="3px" />`;
                    }
                      //  this.table += `<div class="tube"></div>`;
                    })

                    this.table +=`</td>`;
                }
                if(row[1] !== null){
                  this.table +=`<td class="col-2">
                            ${row[1]}
                          </td>`;
                }
                if(row[2] !== null){
                  this.table +=`<td class="col-3">
                            ${row[2]}
                          </td>`;
                }
                if(row[3] !== null){
                  this.table +=`<td class="col-3">
                            ${row[3]}
                          </td>`;
                }
                if(row[4] !== null){
                  this.table +=`<td class="col-3">
                            ${row[4]}
                          </td>`;
                }
                if(row[5] !== null){
                  this.table +=`<td class="col-3">
                            ${row[5]}
                          </td>`;
                }
              });
              this.table +=`</table>
                        </body>
                        </html>`;

      resolve(this.table);
    });
  }

  setTubes(bit){
    return
  }

  createPdf(htmlString){

      (<any>window).cordova.plugins.pdf.htmlToPDF({
        data: htmlString,
        documentSize: "A4",
        landscape: "portrait",
        type: "base64"
    },
    (encodedString) => this.openPrinter(encodedString),
    (error) => console.log('error:', error));
  }

  openPrinter(encodedString){
    this.platform.ready().then(() => {

    (<any>window).plugins.PrintPDF.print({
      data: encodedString,
      type: 'Data',
      title: 'Print Document',
      success: function(){
          console.log('success');
      },
      error: function(data){
          data = JSON.parse(data);
          console.log('failed: ' + data.error);
      }
      });
    });

  }
}
