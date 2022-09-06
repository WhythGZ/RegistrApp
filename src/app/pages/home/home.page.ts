import { Component, OnInit } from '@angular/core';

import { Router, Routes } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private router: Router ,private menu: MenuController, private alertController: AlertController) { }

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

  }

}
