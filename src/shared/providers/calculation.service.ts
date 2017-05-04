import { Injectable } from '@angular/core';

@Injectable()
export class CalculationService {

  constructor() {
  }

  decimalAdjust(type, value, exp){
      // If the exp is undefined or zero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // If the value is not a number or the exp is not an integer...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Shift back
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    calculateRows(obj){
        let values = [];
        values['effect1'] = null;
        values['effect2'] = null;
        values['length1'] = null;
        let wpm = null;

        if(obj.wpm_nom){
          if(obj.userInput.flow - obj.userInput.return){
            wpm = Math.floor(obj.wpm_nom * Math.pow((obj.userInput.flow - obj.userInput.return) /
            (Math.log((obj.userInput.flow - obj.userInput.room) /
            (obj.userInput.return - obj.userInput.room))) /
            ((75 - 65) / Math.log((75 - 20) / (65 - 20))), obj.n_koef));
          }
        }

        if(wpm){
            if(!obj.height_fact){
                let inputHeight = obj.userInput.height;
                if(inputHeight <= 100)
                    obj.height_fact = 1;
                else if(inputHeight <= 125)
                    obj.height_fact = 1.1;
                else if(inputHeight <= 150)
                    obj.height_fact = 1.2;
                else if(inputHeight <= 200)
                    obj.height_fact = 1.3;
                else
                    obj.height_fact = 1;
            }
            //calculate first length and round number to nearest 10
            let length_1 = ((obj.userInput.watt * obj.height_fact) / wpm) * 1000;
            length_1 = this.decimalAdjust('round',length_1, 1);
            let effect_1 = Math.ceil((length_1 / 1000 ) * obj.height_fact * wpm);
            let effect_2 = Math.ceil((obj.userInput.length / 1000 ) * obj.height_fact * wpm);

            values['effect2'] = effect_2;

            if(length_1 < obj.maxLen && length_1 > obj.minLen){
              values['length1'] = length_1;
              values['effect1'] = effect_1;
            }
        }
        return values;
      }

  calculateVerticalRows(obj){

        let values = [];
        values['height'] = null;
        values['effect1'] = null;
        values['effect2'] = null;
        let wpm = null;

        if(obj.userInput.height < 1000){
          obj.userInput.height = 1000;
        }

        if(obj.userInput.height > 3200){
          obj.userInput.height = 3200;
        }

        wpm = Math.round(Math.pow((((obj.userInput.flow - obj.userInput.return) /
                        Math.log((obj.userInput.flow - obj.userInput.room) /
                        (obj.userInput.return - obj.userInput.room))) / ((75 - 65) /
                        Math.log((75 - 20) / (65 - 20)))), 1.21));

        values['height'] = Math.ceil(((obj.userInput.watt / obj.panel_fakt) /
                          (obj.userInput.length / 70) - (35.83333 * wpm)) /
                          (5.83333 * wpm) * 100);

        if(values['height'] < 1000){
          values['height'] = 1000;
        }

        if(values['height'] > 3200){
          values['height'] = 3200;
        }

        values['height'] = Math.ceil(values['height'] / 100) * 100;
        values['effect1'] = Math.ceil(obj.panel_fakt *
                            (35.83333 + (values['height'] / 100) * 5.83333 * wpm) *
                            obj.userInput.length / 70);

        values['effect2'] = Math.round(obj.panel_fakt * ((35.83333 * wpm) +
                            (obj.userInput.height / 100) *
                            (5.83333 * wpm)) * obj.userInput.length / 70);

        return values;
      }

    setTableRow(row, inputObject): any{
        let tubes = [];
        let n_koef;
        let wpm_nom;
        let height_fact = null;
        let rowArray = [];
        let values = null;

        if(inputObject["system"].dbName === "Vertical.sqlite"){
          let Obj = {
              userInput: inputObject["formValues"],
              panel_fakt: row.panel_fakt
          }

          values = this.calculateVerticalRows(Obj);

          rowArray[0] = Array.from(row.tubes);
          rowArray[1] = row.artno + (inputObject["formValues"].length / 10) + row.artno_pad
          rowArray[2] = values['height'];
          rowArray[3] = values['effect1'];
          rowArray[4] = inputObject["formValues"].height;
          rowArray[5] = values['effect2'];

        //all other systems but vertical
        }else{
          if(row.wpm_nom){
            wpm_nom = row.wpm_nom.toString();
            wpm_nom = wpm_nom.replace(',', '.');
          }

          if(row.n_koef){
            n_koef = row.n_koef.toString();
            n_koef = n_koef.replace(',', '.');
          }else{

            if(inputObject["system"].dbName === "Convectors.sqlite"){
              n_koef = 1.2;
              height_fact = 1;
            }else{
              n_koef = 1;
            }
          }

          if(row.tubes){
            tubes = Array.from(row.tubes);
          }

          let Obj = {
              userInput: inputObject["formValues"],
              maxLen: 6000,
              minLen: 400,
              n_koef: n_koef,
              wpm_nom: wpm_nom,
              height_fact: height_fact
          }
          values = this.calculateRows(Obj);

          rowArray[0] = tubes;
          rowArray[1] = row.artno;
          rowArray[2] = values['length1'];
          rowArray[3] = values['effect1'];
          rowArray[4] = inputObject["formValues"].length;
          rowArray[5] = values['effect2'];
        }

        return rowArray;
      }
}
