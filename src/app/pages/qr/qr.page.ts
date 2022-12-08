import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { SubjectCrudService } from 'src/app/services/subject-crud.service';



@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})



export class QrPage implements OnInit {
  rawDate = new Date()
  date = this.rawDate.getDate() + "/" + (this.rawDate.getMonth() + 1) + "/" + this.rawDate.getFullYear()
  title = 'app';
  elementType = 'url';
  value;
  data : any = [];
  constructor(private qr: NgxQRCodeModule, private asignatura: SubjectCrudService,    private activeRoute: ActivatedRoute,private router: Router,
    ) {
    this.activeRoute.queryParams.subscribe(paramas => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.info;
      }
    });
  }

  ngOnInit() {
    console.log(this.data)
    this.value = "/date: " + this.date+"/id: "+ this.data[0] +"/code: " + this.data[1] + "/dates: " + this.data[2]
  }
}
