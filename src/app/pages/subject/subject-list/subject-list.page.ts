import { Component, OnInit } from '@angular/core';
import { RamosCrudService } from 'src/app/services/ramos-crud.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.page.html',
  styleUrls: ['./subject-list.page.scss'],
})
export class SubjectListPage implements OnInit {


  SubjectList : any = []


  constructor(
    private ramoService: RamosCrudService
  ) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.ramoService.readSubject().subscribe(
      (response) => {this.SubjectList = response}
    )
  }
} 
