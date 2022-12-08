import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {
  _id: number;
  rut: string;
  name: string;
  suname: string;
  username: string;
  email: string;
  password: string;
  isAdmin: string;
  teacher: string;
}

@Injectable({
  providedIn: 'root'
})


export class UserCrudService {
  Users: any = [];
  endpoint = 'http://192.168.1.2:3000/usuarios';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private httpClient: HttpClient) { }
//----------------------------crear usuario--------------------
  createUser(user: User): Observable<any>{
    return this.httpClient.post<User>(this.endpoint, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.handleError<User>('Error occured'))
    );
  }

  validaRut(rutCompleto:any) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
      return false;
    var tmp 	= rutCompleto.split('-');
    var digv	= tmp[1]; 
    var rut 	= tmp[0];
    if ( digv == 'K' ) digv = 'k' ;
    
    return (this.dv(rut) == digv );
  }

  dv (T:any){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
  }

  checkData(rut, name, suname, username, email, password){
    const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

        //validar rut
        if (rut.length!=10 || !this.validaRut(rut)){
          return false;
        }

        //validar nombre
        else if (name.length<3){
          return false;
        }

        //validar apellido
        else if (suname.length<4){
          return false;
        }

        //validar username
        else if (username.length<5){
          return false;
        }

        //validar email bien escrito
        
        else if (!expression.test(email)){
          return false;
        }

        //validar password
        else if (password.length<6){
          return false;
        }

         //validar que el email, rut y username no se repitan
        else{   
        this.getUsers().subscribe((response) => {
          this.Users = response
          let emailFilter = this.Users.filter(obj => obj.email === email);
          let rutFilter = this.Users.filter(obj => obj.rut === rut);
          let usernameFilter = this.Users.filter(obj => obj.username === username);
            // validar email repetido
            if (emailFilter.length != 0){
              return false;
            }
            // validar rut repetido
            else if (rutFilter != 0){
              return false;
            }
            // validar username repetido
            else if(usernameFilter != 0){
              return false;
            }
            //crear usuario
            else{
              return true;
            }
          }
        )
    }
  }

//esta funcion nos ayuda a mostrar el registro que nostros pedimos
  getUser(id): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<User[]>(`Get user id=${id}`))
      );
  }

//nos ayuda a listar los registros que estan en la "usuarios"
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint)
      .pipe(
        tap(() => console.log('Users retrieved!')),
        catchError(this.handleError<User[]>('Get user', []))
      );
  }
//-----------------actualizar usuario-------------
  updateUser(id, user: User): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<User[]>('Update user'))
      );
  }
//------------------eliminar usuario----------------------
  deleteUser(id): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<User[]>('Delete user'))
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
