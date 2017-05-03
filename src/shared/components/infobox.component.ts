import { Component, Input} from '@angular/core';

@Component({
  selector: 'infobox',
  templateUrl: "infobox.component.html",
  styleUrls:  ['/src/shared/components/infobox.component.scss']
})

export class InfoboxComponent {
  infoboxVisible: boolean = false;
  @Input() inputObject: Object;

  constructor() {}

  toggleInfoBox(){
    if(this.infoboxVisible){
      this.infoboxVisible = false;
    }else{
      this.infoboxVisible = true;
    }
  }
}
