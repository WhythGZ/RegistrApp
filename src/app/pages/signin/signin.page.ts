import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

  constructor(private toastController: ToastController, private router: Router) {}

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
      this.router.navigate(['/home']);
    }
    else{
      this.presentToast('bottom');
    }

  }
  ngOnInit() {

  }
}
