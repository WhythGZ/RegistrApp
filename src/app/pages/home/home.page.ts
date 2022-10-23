import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationExtras, Router, Routes } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { MenuController } from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  handlerMessage = '';
  roleMessage = '';
  data: any;

  constructor(private auth: AuthService, private activeRoute: ActivatedRoute, private router: Router ,private menu: MenuController, private alertController: AlertController) {
    this.activeRoute.queryParams.subscribe(paramas => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
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

  dataToPageList() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.data
      }
    };
    this.router.navigate(['list'], navigationExtras)
  }

  dataToPageCreate() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.data
      }
    };
    this.router.navigate(['create'], navigationExtras)
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alerta confirmeda';
            this.router.navigate(['/signin']);
          },
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alerta canceleda';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  config(){
    console.log('configuraciones');
  }

  openMenu() {
     this.menu.enable(true,'first');
     this.menu.open('first');
  }

  ngOnInit() {
   this.auth.validate(this.data);
  }

}
