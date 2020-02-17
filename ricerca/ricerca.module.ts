import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RicercaPageRoutingModule } from './ricerca-routing.module';

import { RicercaPage } from './ricerca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RicercaPageRoutingModule
  ],
  declarations: [RicercaPage]
})
export class RicercaPageModule {}
