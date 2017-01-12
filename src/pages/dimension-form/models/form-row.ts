export class FormRow {
  fieldName: string;
  defaultValue: string;
  minValue: string;
  maxValue: string;
  symbol: string;
  name: string;
  steps: any;

  constructor(row) {
    this.fieldName = row.fieldname;
    this.defaultValue = row.default_value;
    this.minValue = row.min_value;
    this.maxValue = row.max_value;
    this.symbol = row.symbol;
    this.name = row.name;

    if(row.steps !== null){
      this.steps = row.steps.split(',');
    }else{
      this.steps = row.steps;
    }
  }


  private createInput(): string{
    let html: string;

    if(this.steps === null){

      //input
      html = `<input type="number"
              class="form-control col col-30 input-field"
              id = ${ this.fieldName }
              value = ${ this.defaultValue }
              data-ng-min = ${ this.minValue }
              data-ng-max = ${ this.maxValue }
              required>`
    }else{
      this.steps.forEach((item)=>{
        console.log(item)
      })

      //dropdown
      html = `<select
              (change)="onSelect($event.target.value)"
              id = ${ this.fieldName }>
                <option *ngFor="#step of ${this.steps}"
                [value]=${this.defaultValue}>
                </option>
              </select>
            `
            console.log(html);
    }
    return html;
  }

  public createFormRow(): string{
    let htmlFormRow: string = `<div class="row form-row"
                                  <label for=${ this.fieldName }
                                    class="col col-20 col-form-label">
                                    ${ this.name }
                                  </label>
                                  ${this.createInput()}
                                  <label for=${ this.fieldName }
                                    class="col col-20 input-unit">
                                      ${ this.symbol }
                                  </label>
                                  <div class="error"
                                    ng-messages="dimension-form.${ this.fieldName }.$error"
                                    role="alert">
                                    <div ng-message="required">Tomt fält</div>
                                    <div ng-message="min">Min ${ this.minValue }</div>
                                    <div ng-message="max">Max ${ this.maxValue }</div>
                                  </div>
                                  <div class="error"
                                    ng-show="dimension-form.${ this.fieldName }.$error"
                                    role="alert">Ogiltigt tal
                                  </div>
                                </div>`;

    return htmlFormRow;
  }
}
/*<form name="convectorForm">

  <!-- input field inflow -->
  <div class="row form-row">
    <label for="convector-flow" class="col col-20 col-form-label">Tillopp:</label>
    <input type="number"
    class="form-control col col-30 input-field"
    name="flow" id="convector-flow"
    ng-model="convector.flow"
    data-ng-min="0" data-ng-max="100"
    required>
    <label for="convector-flow" class="col col-20 input-unit">&#8451</label>
    <div class="error" ng-messages="convectorForm.flow.$error" role="alert">
      <div ng-message="required">Tomt fält</div>
      <div ng-message="min">Min 0</div>
      <div ng-message="max">Max 100</div>
    </div>
    <div class="error" ng-show="convectorForm.flow.$error.number" role="alert">Ogiltigt tal</div>
  </div>

  <!-- input field return -->
  <div class="row">
    <label for="convector-return" class="col col-20 col-form-label">Retur:</label>
    <input type="number"
    class="form-control col col-30 input-field"
    name="return" id="convector-return"
    ng-model="convector.return"
    data-ng-min="0" data-ng-max="100"
    required>
    <label for="convector-flow" class="col col-20 input-unit">&#8451</label>
    <div class="error" ng-messages="convectorForm.return.$error" role="alert">
      <div ng-message="required">Tomt fält</div>
      <div ng-message="min">Min 0</div>
      <div ng-message="max">Max 100</div>
    </div>
    <div class="error" ng-show="convectorForm.return.$error.number" role="alert">Ogiltigt tal</div>
  </div>

  <!-- input room -->
  <div class="row">
    <label for="convector-room" class="col col-20 col-form-label">Rum:</label>
      <input type="number"
      class="form-control col col-30 input-field"
      name="room" id="convector-room"
      ng-model="convector.room"
      data-ng-min="0" data-ng-max="35" required>
      <label for="convector-room" class="col col-20 input-unit">&#8451</label>

    <div class="error" ng-messages="convectorForm.room.$error" role="alert">
      <div ng-message="required">Tomt fält</div>
      <div ng-message="min">Min 0</div>
      <div ng-message="max">Max 35</div>
    </div>
    <div class="error" ng-show="convectorForm.room.$error.number" role="alert">Ogiltigt tal</div>
  </div>

  <!-- input effect -->
  <div class="row">
      <label for="convector-effect" class="col col-20 col-form-label">Effekt:</label>
      <input type="number"
      class="form-control col col-30 input-field"
      name="effect" id="convector-effect"
      ng-model="convector.effect"
      data-ng-min="200" data-ng-max="10000" required>
      <label for="convector-effect" class="col col-20 input-unit">W</label>

    <div class="error" ng-messages="convectorForm.effect.$error" role="alert">
      <div ng-message="required">Tomt fält</div>
      <div ng-message="min">Min 200</div>
      <div ng-message="max">Max 10000</div>
    </div>
    <div class="error" ng-show="convectorForm.effect.$error.number" role="alert">Ogiltigt tal</div>
  </div>

  <!-- input length -->
  <div class="row">
    <label for="convector-length" class="col col-20 col-form-label">Längd:</label>
      <input type="number"
      class="form-control col col-30 input-field"
      name="length" id="convector-length"
      ng-model="convector.length"
      data-ng-min="400" data-ng-max="6000" required>
      <label for="convector-length" class="col col-20 input-unit">MM</label>

    <div class="error" ng-messages="convectorForm.length.$error" role="alert">
      <div ng-message="required">Tomt fält</div>
      <div ng-message="min">Min 400</div>
      <div ng-message="max">Max 6000</div>
    </div>
    <div class="error" ng-show="convectorForm.length.$error.number" role="alert">Ogiltigt tal</div>
  </div>

  <!-- dropdown height -->
  <div class="row">
    <label for="convector-height" class="col col-20 col-form-label">Höjd:</label>
      <select
        class="form-control col col-30 input-field"
        id="convector-height"
        ng-model="convector.height"
        ng-options="height for height in convectorHeights">
      </select>
      <label for="proline-height" class="col col-20 input-unit">MM</label>
  </div>

  <!-- submit form -->
  <div class="row">
    <button type="submit"
            class="form-control btn-calculate"
            ng-click="calculateRows(convector)">
      Beräkna
    </button>
  </div>
</form>*/
