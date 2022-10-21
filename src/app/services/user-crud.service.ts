import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';

export class User {
  _id: number;
  name: string;
  suname: string;
  username: string;
  email: string;
  password: string;
  isAdmin: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  createUser(user: User): Observable<any>{
    return this.http.post<User>(this.endpoint+'/usuario/create', user, this.httpOptions).pipe(
      retry(3)
    );
  }

  getUsers():Observable<any>{
    return this.http.get(this.endpoint+'/usuarios').pipe(
    retry(3)
    );
  }

  getUser(id):Observable<any>{
    return this.http.get(this.endpoint+'/usuario/'+id).pipe(
    retry(3)
    );
  }

  deleteUser(id):Observable<any>{
    return this.http.delete(this.endpoint+'/usuario/'+id).pipe(
    retry(3)
    );
  }

  updateUser(id, user: User): Observable<any> {
    return ;
  }

  loginAuth(username){
    return JSON.stringify(this.http.get(this.endpoint+'/usuario/find/'+username));
  }
  
}
