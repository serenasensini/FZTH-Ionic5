import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RicercaPage } from './ricerca.page';

describe('RicercaPage', () => {
  let component: RicercaPage;
  let fixture: ComponentFixture<RicercaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RicercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
