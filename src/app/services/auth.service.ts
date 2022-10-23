import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { UserCrudService } from './user-crud.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Users: any = [];
  USER;

  data:any;

  objt: any;

  constructor(private http:HttpClient,
    private userCrudService: UserCrudService,
    private router: Router) { }

    async auth(email, password){
      let valid = false;
      await this.userCrudService.getUsers().subscribe((response) => {
        this.Users = response
        let filtrado = this.Users.filter(obj => obj.email == email);
        if (filtrado.length == 0){
          console.log("El correo no existe");
        }
        else{
          if (filtrado[0].password === password){
            valid = true;
            console.log("Las credenciales coinciden")
            this.USER = filtrado[0].email;
            this.objt = {
              name: (filtrado[0].name),
              pass: (filtrado[0].password),
              suname:(filtrado[0].suname),
              username:(filtrado[0].username),
              email:(filtrado[0].email),
              isAdmin:(filtrado[0].isAdmin),
              id:(filtrado[0].id),
              teacher:(filtrado[0].teacher)
            }
            this.dataToPage(this.objt);
          }
          else{
            console.log("Las credenciales no coinciden")
          }
        }
      }
    );
    return valid;
  };

  dataToPage(data){
    let navigationExtras: NavigationExtras = {
      state: {
        user: data
      }
    };
    this.router.navigate(['home'], navigationExtras)
  }

  validate(data){
    if(data === undefined){
      this.router.navigate(['signin']);
    }
    else{
      return false;
    }
  }
}
