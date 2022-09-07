import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  usuario = {
    name: '',
    suname: '',
    username: '',
    password: '',
    email: '',
  }

  constructor(private router: Router, private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', message, icon){
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position,
      icon,
    });

    await toast.present();
  }

  validarForm(){
    const flag = document.getElementById('form').textContent;
    if (flag === 'true'){
      this.presentToast('bottom', 'Verifique su email', 'mail-sharp');
    }
    else{
      this.presentToast('bottom', 'Debe rellenar los campos', 'alert-circle-sharp');
    }
}


  ngOnInit() {
  }

}
