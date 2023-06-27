
import { Component, OnInit } from '@angular/core';

import { HousingService } from 'src/app/service/housing.service';
import { iproperty } from '../iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Sellrent=1;
  properties:iproperty[];

  constructor(private route:ActivatedRoute,private housingservice:HousingService){}
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.Sellrent= 2;
    }
   /* this.http.get('Data/properties.json').subscribe(
      data=>{
        this.properties=data;
      }
    );*/

    this.housingservice.getallproperties(this.Sellrent).subscribe(
      data=>{
        this.properties=data;

      },error=>{
        console.log('httperror');
        console.log(error);
      }


    );



  }
}
