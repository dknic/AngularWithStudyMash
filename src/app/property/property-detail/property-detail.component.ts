import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyid: number;

  constructor(private route: ActivatedRoute,  private router:Router) { }

  ngOnInit() {
   //this.propertyid= Number(this.route.snapshot.params['id']);

   this.route.params.subscribe(
    (params)=>{
      this.propertyid= +params['id'];
    }
   );
  }
 //we can also use + operator to convert string into number like = +params['id']

  onSelectNext(){
 this.propertyid+=1;
  this.router.navigate(['property-detail',this.propertyid])
  }

}
