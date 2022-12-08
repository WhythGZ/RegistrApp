import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClassesCrudService } from 'src/app/services/classes-crud.service';
import { RamosCrudService } from 'src/app/services/ramos-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  formularioClase: FormGroup;
  ramos: any = [];


  constructor(
    private claseService: ClassesCrudService,
    private ramoService: RamosCrudService,
    private fb: FormBuilder
    ) { }



  ngOnInit() {
    this.obtenerRamos();
    this.formularioClase = this.fb.group({
      ramo: [''],
      fecha: [''],
      hora: [''],
      disponible: ['']
    });
  }

  obtenerRamos() {
    this.ramoService.readSubject().subscribe(
      response => { this.ramos = response },
      err0r => { console.log(err0r) });
  }

  crearClase() {
    this.claseService.createClass(this.formularioClase.value);
  }

  onSubmit() {
    this.crearClase();
  }

}
