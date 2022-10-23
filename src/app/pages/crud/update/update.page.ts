import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from '../../../services/user-crud.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  data: any;
  updateUserFg: FormGroup;
  id: any;

  constructor(
    private auth: AuthService,
    private activeRoute: ActivatedRoute,
    private userCrudService: UserCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activeRoute.queryParams.subscribe(paramas => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    this.auth.validate(this.data);
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      name: [''],
      suname: [''],
      username: [''],
      email: [''],
      password: [''],
      isAdmin: [''],
      teacher: [''],
    })
  }

  fetchUser(id) {
    this.userCrudService.getUser(id).subscribe((data) => {
      this.updateUserFg.setValue({
        name: data['name'],
        suname: data['suname'],
        username: data['username'],
        email: data['email'],
        password: data['password'],
        isAdmin: data['isAdmin'],
        teacher: data['teacher'],
      });
    });
  }

  dataToPage(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.data
      }
    };
    this.router.navigate(['profile'], navigationExtras)
  }

  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.userCrudService.updateUser(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
        })
    }
  }

}
