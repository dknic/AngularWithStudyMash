
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:any

  constructor(private housingservice:HousingService){}
  ngOnInit(): void {

    this.housingservice.getallproperties().subscribe(
      data=>{
        this.properties=data;
      },error=>{
        console.log('httperror');
        console.log(error);
      }


    );



  }
}
