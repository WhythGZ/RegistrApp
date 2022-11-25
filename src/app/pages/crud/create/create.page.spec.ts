import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePage } from './create.page';

describe('CreatePage', () => {
  let component: CreatePage;
  let fixture: ComponentFixture<CreatePage>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePage ],
      imports: [IonicModule.forRoot(),FormsModule, ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule],
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
