import { Component, ElementRef, OnInit, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { FormGroup, FormBuilder } from "@angular/forms";
import { User, UserCrudService } from '../../../services/user-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {
  
  userForm: FormGroup;

  @ViewChild('button',{read:ElementRef})button:ElementRef;
  usuario = {
    name: '',
    suname: '',
    username: '',
    email: '',
    password: '',
    isAdmin: '',
  }

  constructor(private router: Router,
               private toastController: ToastController, 
               private animationCtrl: AnimationController,
               private formBuilder: FormBuilder,
               private zone: NgZone,
               private userCrudService: UserCrudService,
               ) { 
                this.userForm = this.formBuilder.group({
                  name: [''],
                  suname: [''],
                  username: [''],
                  email: [''],
                  password: [''],
                  isAdmin: [''],
                })
               }

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
      this.presentToast('bottom', 'Verifique su email', 'mail-sharp');
    }
    else{
      this.presentToast('bottom', 'Debe rellenar los campos', 'alert-circle-sharp');
    }
  }
  ngOnInit() {
  }

    onSubmit(){
      if(!this.userForm.valid){
        return false;
      }
      else{
        this.userCrudService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/list']);
          })
        })
      }
    }

}
