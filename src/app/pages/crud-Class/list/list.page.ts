import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesCrudService } from 'src/app/services/classes-crud.service';
import { RamosCrudService } from 'src/app/services/ramos-crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  ClasesDisp: any = [];

  constructor(
    private claseService: ClassesCrudService,
    private ramoService: RamosCrudService,
    private nav: Router
    ) { }


  ionViewDidEnter() {
    this.claseService.readClasses().subscribe(
      (response) => {this.ClasesDisp = response},
      (err0r) => {console.log(err0r)}
    )
  }

  irAHome(){
    this.nav.navigate(['/home'])
  }
  async alertaError() {

  }
}
