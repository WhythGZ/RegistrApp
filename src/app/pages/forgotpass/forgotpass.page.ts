import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  usuario = '';

  constructor(private toastController: ToastController) { }

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
