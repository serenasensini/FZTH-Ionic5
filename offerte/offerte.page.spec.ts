import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffertePage } from './offerte.page';

describe('OffertePage', () => {
  let component: OffertePage;
  let fixture: ComponentFixture<OffertePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
