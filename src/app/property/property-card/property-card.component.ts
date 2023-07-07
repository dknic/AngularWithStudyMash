import { Component, Input } from '@angular/core';
import { IpropertyBase } from 'src/app/model/IpropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  @Input() property:IpropertyBase;
  @Input() hiddenicon:boolean;


}
