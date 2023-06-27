import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { iproperty } from '../property/iproperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getallproperties(Sellrent:number):Observable<iproperty[]>{
    return this.http.get('Data/properties.json')
    .pipe(
      map(data=>{
        const propertiesArray: Array<iproperty>= [] ;
        for(const id in data){
          if(data.hasOwnProperty(id)&& data[id].Sellrent===Sellrent){
           propertiesArray.push(data[id]);
          }
        }
        return propertiesArray
      })
    );
  }
}
