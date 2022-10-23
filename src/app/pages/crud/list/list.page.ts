import { Component, OnInit } from '@angular/core';
import { User, UserCrudService } from '../../../services/user-crud.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  data:any;
  Users: any = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private userCrudService: UserCrudService,
    private router: Router
  ) {
    this.activeRoute.queryParams.subscribe(paramas => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.userCrudService.getUsers().subscribe((response) => {
      this.Users = response;
    })
  }

  dataToPageHome() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.data
      }
    };
    this.router.navigate(['home'], navigationExtras)
  }

  removeUser(user, i) {
    if (window.confirm('Estas seguro?')) {
      this.userCrudService.deleteUser(user.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Usuario borrado!')
        }
      )
    }
  }

}
