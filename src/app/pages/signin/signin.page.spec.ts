import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SigninPage } from './signin.page';

describe('SigninPage', () => {
  let component: SigninPage;
  let fixture: ComponentFixture<SigninPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPage ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule, FormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('CONFIRMAREMOS SI LA PAGINA TIENE FUNCIONANDO LOS FORMULARIOS CORRECTAMENTE', () => {
    expect(component).toBeTruthy();
  });
});
