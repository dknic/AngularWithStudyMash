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

  getallproperties(Sellrent:number):Observable<IpropertyBase[]>{
    return this.http.get('Data/properties.json')
    .pipe(
      map(data=>{
        const propertiesArray: Array<IpropertyBase>= [] ;
        for(const id in data){
          if(data.hasOwnProperty(id)&& data[id].SellRent===Sellrent){
           propertiesArray.push(data[id]);
          }
        }
        return propertiesArray
      })
    );
  }
  addProperty(property: property) {
    localStorage.setItem('newProp', JSON.stringify(property));
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
