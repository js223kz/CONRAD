import { Injectable } from '@angular/core';

@Injectable()
export class PrintTemplateService {

  constructor() {}

  getTemplate(descriptionRows, tableRows, inputObject){

    let htmlCode = `<html>
                      <body>
                      <table style="width: 650px;
                      margin-right: 30px;
                      margin-left: 50px;
                      display: table;">
                        <tr style="border-bottom: 1px solid #c6c6c6;
                                    padding-top: 2%;
                                    padding-bottom: 2%;">
                          <td style="width: 200px">
                          </td>
                          <td style="width: 100px">
                            <label style="font-weight: bold;">Konvektortyp</label>
                          </td>
                          <td style="width: 50px">
                            <label style="font-weight: bold;">Längd</label>
                          </td>
                          <td style="width: 50px">
                            <label style="font-weight: bold;">Effekt</label>
                          </td>
                          <td style="width: 50px">
                            <label style="font-weight: bold;">Längd</label>
                          </td>
                          <td style="width: 50px">
                            <label style="font-weight: bold;">Effekt<label>
                          </td>
                        </tr>
                       `;


                       tableRows.forEach((row)=>{
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

                    htmlCode +=`</tr>`;
                  })

                  htmlCode +=`</table><table style="width: 650px;
                                      margin-right: 30px;
                                      margin-left: 50px;
                                      display: table;
                                      margin-top: 50px;">
                              `;
                      descriptionRows.forEach((descRow)=>{
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

                htmlCode += `
                          </table>
                          <div style="width: 650px;
                                      margin-right: 30px;
                                      margin-left: 50px;
                                      margin-top: 20px;">
                            <span>System: ${inputObject.system.displayName}</span>
                            <span>Tillopp: ${inputObject.formValues.flow}</span>
                            <span>Retur: ${inputObject.formValues.return}</span>
                            <span>Rum: ${inputObject.formValues.room}</span>
                            <span>Effekt: ${inputObject.formValues.watt}</span>
                            <span>Längd: ${inputObject.formValues.length}</span>
                            <span>Höjd: ${inputObject.formValues.height}</span>
                        </div>
                        </body>
                      </html>`;
      return htmlCode;
  }

}
