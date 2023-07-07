import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IpropertyBase } from '../model/IpropertyBase';

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
}
