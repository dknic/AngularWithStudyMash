import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyid: number;
  property=new property();

  constructor(private route: ActivatedRoute,  private router:Router, private housingService:HousingService) { }

  ngOnInit() {
   //this.propertyid= Number(this.route.snapshot.params['id']);

   this.route.params.subscribe(
    (params)=>{
      this.propertyid= +params['id'];
      this.housingService.getProperty(this.propertyid).subscribe(
        (data:any) => {
          this.property=data;
        });
    }
   );
  }
 //we can also use + operator to convert string into number like = +params['id']

  onSelectNext(){
 this.propertyid+=1;
  this.router.navigate(['property-detail',this.propertyid])
  }

}
