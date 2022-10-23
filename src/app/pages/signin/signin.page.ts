import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { updateShorthandPropertyAssignment } from 'typescript';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  @ViewChild('button',{read:ElementRef})button:ElementRef;

  usuario = {
    email: '',
    password: '',
  };

  obj: any;
  

  constructor(private auth: AuthService, private toastController: ToastController, private router: Router,private animationCtrl: AnimationController) {}

  async presentToast(message, position: 'top' | 'middle' | 'bottom'){
    const toast = await this.toastController.create({
      message,
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
      this.auth.auth(this.usuario.email, this.usuario.password)
    }
    else{
      this.presentToast('Debe rellenar los campos', 'bottom');
    }

  }

  dataToPage(data){
    let navigationExtras: NavigationExtras = {
      state: {
        user: data
      }
    };
    this.router.navigate(['home'], navigationExtras)
  }

  ngOnInit() {
    // console.clear()
  }

}
