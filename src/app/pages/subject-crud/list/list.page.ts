import { Component, OnInit } from '@angular/core';
import { SubjectCrudService } from 'src/app/services/subject-crud.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  Subjects: any = [];

  data: any;

  constructor(
    private subjectCrudService: SubjectCrudService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private alertCon : AlertController,
    private auth: AuthService
  ) {
    this.activeRoute.queryParams.subscribe(paramas => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    this.auth.validate(this.data);
  }
  ionViewDidEnter() {
    this.subjectCrudService.getSubjects().subscribe(
      (response) => { this.Subjects = response }
    );
  }
  dataToPage(path: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.data
      }
    };
    this.router.navigate([path], navigationExtras)
  }
  dataToEdit(id: string){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.data
      }
    };
    this.router.navigate(['subupdate/',id], navigationExtras)
  }

  async deleteSubject(id) {
    const alert = await this.alertCon.create({
      header: 'Eliminar Asignatura',
      message: 'Seguro que desea borrar la asignatura?',
      buttons: [{
        text: 'Si',
        handler : () =>
        this.deleteSubjectServ(id)
      },'no'],
    });
    await alert.present();
  } 

  async confirmacion() {
    const alert = await this.alertCon.create({
      header: 'Asignatura Borrada',
      message: 'la asignatura ya fue eliminada',
      buttons: ['Entendido'],
    });
    await alert.present();
  } 

  deleteSubjectServ(id) { 
    this.subjectCrudService.deleteSubject(id).subscribe(r => console.log(id));
    this.confirmacion();
    this.ionViewDidEnter();
  }
}