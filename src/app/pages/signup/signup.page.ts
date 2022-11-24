import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { UserCrudService } from 'src/app/services/user-crud.service';
  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  userForm: FormGroup;

  @ViewChild('button',{read:ElementRef})button:ElementRef;
  usuario = {
    rut: '',
    name: '',
    suname: '',
    username: '',
    password: '',
    email: '',
  }


  constructor(private router: Router, private toastController: ToastController, private animationCtrl: AnimationController, private formBuilder: FormBuilder, private zone: NgZone, private userCrudService: UserCrudService) { }

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

}

  ngOnInit() {
  }

  onSubmit(){
    if(!this.userForm.valid){
      this.presentToast('bottom', 'Debe rellenar los campos', 'alert-circle-sharp');
      return false;
    }
    else{
      const flag = document.getElementById('form').textContent;
      if (flag === 'true'){
        this.userCrudService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.presentToast('bottom', 'Registrado correctamente', 'checkmark-circle-outline');
            this.router.navigate(['/list']);
          })
        })
      }
      else{
        this.presentToast('bottom', 'Debe rellenar los campos', 'alert-circle-sharp');
      }
    }
  }
}
