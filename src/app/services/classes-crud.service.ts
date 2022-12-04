import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Class {
  _id:number;
  ramo_id : number;
  alumnos: any[];
  disponible : boolean;
}


export class ClassesCrudService {
  APIclasses = 'http://localhost:3000/clases/';

  constructor(private http : HttpClient) { }


  getClass(id:String){
    return this.http.get(this.APIclasses + id);
  }
  createClass(clase : Class){
    return this.http.post(this.APIclasses, clase)
  }
  readClasses(){
    return this.http.get(this.APIclasses);
  }
  updateClass(id, clase : Class){
    return this.http.put(id,clase)
  }
  deleteClass(id:String){
    return this.http.delete(this.APIclasses + id)
  }
}
