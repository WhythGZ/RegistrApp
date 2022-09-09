import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  @ViewChild('button',{read:ElementRef})button:ElementRef;

  usuario = '';

  constructor(private toastController: ToastController, private animationCtrl: AnimationController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', message, icon){
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position,
      icon,
    });

    await toast.present();
  }

  async validarForm(){
    const animation: Animation = this.animationCtrl.create()
    .addElement(this.button.nativeElement)
    .duration(1500)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '0.5' },
      { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
      { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
  await animation.play();
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
