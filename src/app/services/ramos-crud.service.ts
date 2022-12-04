import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Ramo{
  _id : number;
  class_name :  string;
  teacher_id : string
}

export class RamosCrudService {

  APIramos = 'http://localhost:3000/ramos/'


  constructor(private http : HttpClient) { }


  getSubject(id:String){
    return this.http.get(this.APIramos + id);
  }
  createSubject(ramo : Ramo){
    return this.http.post(this.APIramos, ramo)
  }
  readSubject(){
    return this.http.get(this.APIramos);
  }
  updateSubject(id, ramo : Ramo){
    return this.http.put(id,ramo)
  }
  deleteSubject(id:String){
    return this.http.delete(this.APIramos + id)
  }
}
