import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postBnadem(data : any){
return this.http.post<any>("http://localhost:3000/Bnadem", data);
  }
  getBnadem(){
    return this.http.get<any>("http://localhost:3000/Bnadem");
  }
  updateBnadem ( data : any , id : number){
    return this.http.put<any>("http://localhost:3000/Bnadem/"+id,data);
  }
  deleteBnadem ( id : number){
    return this.http.delete<any>("http://localhost:3000/Bnadem/"+id);
  }
}
