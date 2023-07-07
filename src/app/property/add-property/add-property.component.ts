import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IpropertyBase } from 'src/app/model/IpropertyBase';




@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  propertytype:Array<string>=['House','Appartment','Duplex']
  furnishedType:Array<string>=['Fully','sami','unfurnished']
  fFacing:Array<string>=['East','West','North','South']
  hideicontrue:boolean=true;
  propertyview:IpropertyBase={
    Id: 0,
    Name: '',
    price: 0,
    ptype: '',
    Sellrent: 0,
    ftype: '',
    city: '',
    RTM: 0,
    BHK: 0,
    BuiltArea: 0
  };
  constructor(private route:Router) { }

  ngOnInit() {

  }
  onBack(){
    this.route.navigate(['/'])

  }
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

  onSubmit(){
 console.log("form submitted successfully")
 console.log('SellRent='+this.addPropertyForm.value.BesicInfo.SellRent)
console.log(this.addPropertyForm)
  }

}
