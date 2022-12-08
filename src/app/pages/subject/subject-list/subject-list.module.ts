import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { IonicModule } from '@ionic/angular';

import { SubjectListPageRoutingModule } from './subject-list-routing.module';

import { SubjectListPage } from './subject-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< Updated upstream:src/app/pages/subject/subject-list/subject-list.module.ts
    SubjectListPageRoutingModule
=======
    QrPageRoutingModule,
    NgxQRCodeModule
>>>>>>> Stashed changes:src/app/pages/qr/qr.module.ts
  ],
  declarations: [SubjectListPage],
  
})
export class SubjectListPageModule {}
