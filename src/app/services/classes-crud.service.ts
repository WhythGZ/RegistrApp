import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModule } from '../app.module';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: AppModule
})

export class Class {
  _id: number;
  ramo_id: number;
  fecha: string;
  hora: string;
  disponible: boolean;
}


export class ClassesCrudService {
  APIclasses = 'http://localhost:3000/clases/';

  constructor(private http: HttpClient) { }


  getClass(id: String) {
    return this.http.get(this.APIclasses + id);
  }

  createClass(clase: Class) {
    return this.http.post(this.APIclasses, clase)
  }

  readClasses() {
    return this.http.get(this.APIclasses);
  }

  updateClass(id, clase: Class) {
    return this.http.put(id, clase)
  }

  deleteClass(id: String): Observable<Class[]> {
    return this.http.delete<Class[]>(this.APIclasses + id)
    .pipe(
      tap(_ => console.log(`Class deleted: ${id}`)),
      catchError(this.handleError<Class[]>('Delete class'))
    );
  }




  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
