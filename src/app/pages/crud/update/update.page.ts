import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from '../../../services/user-crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateUserFg: FormGroup;
  id: any;

  constructor(
    private userCrudService: UserCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      name: [''],
      suname: [''],
      username: [''],
      email: [''],
      password: [''],
      isAdmin: [''],
    })
  }

  fetchUser(id) {
    this.userCrudService.getUser(id).subscribe(data => {
      this.updateUserFg.setValue({
        name: data[0]['name'],
        suname: data[0]['suname'],
        username: data[0]['username'],
        email: data[0]['email'],
        password: data[0]['password'],
        isAdmin: data[0]['isAdmin'],
      });
    });
  }

  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.userCrudService.updateUser(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }
}
