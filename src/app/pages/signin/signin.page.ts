import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  usuario = {
    username: '',
    password: '',
  };

  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom'){
    const toast = await this.toastController.create({
      message:'Debe rellenar los campos',
      duration: 1500,
      position,
      icon: 'alert-circle-sharp'
    });

    await toast.present();
  }

  validarForm(){
    const flag = document.getElementById('form').textContent;
    if (flag === 'true'){
      console.log('ingreso');
    }
    else{
      this.presentToast('bottom');
    }

  }
  ngOnInit() {

  }
}
