import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffertePageRoutingModule } from './offerte-routing.module';

import { OffertePage } from './offerte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffertePageRoutingModule
  ],
  declarations: [OffertePage]
})
export class OffertePageModule {}
