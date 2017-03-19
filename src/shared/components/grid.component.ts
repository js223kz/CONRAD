
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dimension-grid',
  templateUrl: 'grid.component.html',
  styleUrls:  ['/src/shared/components/grid.component.scss'],
})
export class GridComponent {
  @Input() tableRows;
  constructor() {

  }

}
