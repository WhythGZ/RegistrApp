import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserCrudService } from './user-crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Users: any = [];
  USER;

  constructor(private http:HttpClient,
              private userCrudService: UserCrudService,
              private router: Router)
              {
    
   }

   auth(username, password){
    let valid = false;
    this.userCrudService.getUsers().subscribe((response) => {
      this.Users = response
      let filtrado = this.Users.filter(obj => obj.username == username);
      if (filtrado.length == 0){
        console.log("El usuario no existe");
      }
      else{
        if (filtrado[0].password === password){
          valid = true;
          console.log("Las credenciales coinciden")
          this.USER = filtrado[0].username;
          this.router.navigate(['/home']);
        }
        else{
          console.log("Las credenciales no coinciden")
        }
      }
    }
  );
  return valid;
};

}
