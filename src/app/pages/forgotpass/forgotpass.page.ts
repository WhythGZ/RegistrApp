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
      this.presentToast('bottom','Instrucciones enviadas a su correo electronico','mail-sharp');
    }
    else{
      this.presentToast('bottom','Debe rellenar los campos','alert-circle-sharp');
    }
  }
  ngOnInit() {
  }

}
