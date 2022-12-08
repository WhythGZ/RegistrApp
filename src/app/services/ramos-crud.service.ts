import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Ramo {
  _id: number;
  class_name: string;
  teacher_id: string
}

@Injectable({
  providedIn: 'root'
})

export class RamosCrudService {
  APIramos = 'http://localhost:3000/ramos/';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }
  
  getSubject(id): Observable<any> {
    return this.http.get<Ramo>(this.APIramos + id).pipe
    (tap(_ => console.log(` Subject fetched: ${id}`)),
    catchError(this.handleError<Ramo[]>(`Get Subject id=${id}`)));
  }



  
  createSubject(ramo: Ramo): Observable<any> {
    return this.http.post<Ramo>(this.APIramos, JSON.stringify(ramo), this.httpOptions).pipe
    (catchError(this.handleError<Ramo>('Error occured')));
  }




  readSubject(): Observable<Ramo[]> {
    return this.http.get<Ramo[]>(this.APIramos).pipe(
      tap(users => console.log('Subjects retrieved!')),
      catchError(this.handleError<Ramo[]>('Get Subject', [])));
  }




  updateSubject(id, ramo: Ramo): Observable<any> {
    return this.http.put(id, JSON.stringify(ramo)).pipe(
      tap(_ => console.log(`Subject updated: ${id}`)),
      catchError(this.handleError<Ramo[]>('Update Subject')));
  }




  deleteSubject(id): Observable<Ramo> {
    return this.http.delete<Ramo>(this.APIramos + id).pipe(
      tap(_ => console.log(`Subject deleted: ${id}`)),
      catchError(this.handleError<Ramo>('delete Subject')));
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
