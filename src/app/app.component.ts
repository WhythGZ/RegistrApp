import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RamosCrudService } from './services/ramos-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent {
  constructor(private authService : AuthService, ramoService: RamosCrudService) {}
}
