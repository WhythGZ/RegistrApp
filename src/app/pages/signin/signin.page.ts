import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  @ViewChild('button',{read:ElementRef})button:ElementRef;

  usuario = {
    username: '',
    password: '',
  };

  constructor(private toastController: ToastController, private router: Router,private animationCtrl: AnimationController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom'){
    const toast = await this.toastController.create({
      message:'Debe rellenar los campos',
      duration: 1500,
      position,
      icon: 'alert-circle-sharp'
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
      this.router.navigate(['/home']);
    }
    else{
      this.presentToast('bottom');
    }

  }
  ngOnInit() {

  }
}
