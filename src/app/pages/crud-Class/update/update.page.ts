import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ClassesCrudService } from '../../../services/classes-crud.service'
import { RamosCrudService } from '../../../services/ramos-crud.service'
@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  id : any;
  updateClassfg: FormGroup;

  constructor(
    private clase : ClassesCrudService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.updateClassfg = this.fb.group({
      ramo: [''],
      fecha:[''],
      hora:[''],
      disponible:['']
    });
    this.obtenerClase(this.id);

  }

  obtenerClase(id){
    this.clase.getClass(id).subscribe(
      
      (datos) => this.updateClassfg.setValue({
      ramo: datos['ramo_id'],
      fecha: datos['fecha'],
      hora: datos['hora'],
      disponible: datos['disponible']
    }));
  }
  obtenerRamos(){

  }
}
