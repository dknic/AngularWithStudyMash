import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IpropertyBase } from '../model/IpropertyBase';
import { property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperty(id: number) {
    return this.getallproperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  getallproperties(Sellrent?:number):Observable<IpropertyBase[]>{
    return this.http.get('Data/properties.json')
    .pipe(
      map(data=>{
        const propertiesArray: Array<IpropertyBase>= [] ;
        const localProperties = JSON.parse(localStorage.getItem('newProp')as string);
         console.log(localProperties);
        if (localProperties) {
          for (const id in localProperties) {
            if(Sellrent){
           if (localProperties.hasOwnProperty(id) && Number(localProperties[id].SellRent) === Sellrent) {
             propertiesArray.push(localProperties[id]);
            }}
            else{
              propertiesArray.push(localProperties[id]);
            }
          }
        }
        for(const id in data){
          if (Sellrent){
          if(data.hasOwnProperty(id)&& data[id].SellRent===Sellrent){
            propertiesArray.push(data[id]);
          }
        }
        else {
          propertiesArray.push(data[id]);
        }
        }
        return propertiesArray
      })
    );
  }
  addProperty(property: property) {
    //localStorage.setItem('newProp', JSON.stringify(property));
    let newProp = [property];
    //const newProperty = Object.entries(JSON.parse(localStorage.getItem('newProp')as string));
  //  console.log(newProperty);
    // Add new property in array if newProp alreay exists in local storage
   if (localStorage.getItem('newProp')) {
      newProp = [property,
                  ...JSON.parse(localStorage.getItem('newProp')as string)];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp||{}));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(Number(localStorage.getItem('PID')) + 1));
      return Number(localStorage.getItem('PID'));
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
