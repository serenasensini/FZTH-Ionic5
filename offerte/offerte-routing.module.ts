import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffertePage } from './offerte.page';

const routes: Routes = [
  {
    path: '',
    component: OffertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffertePageRoutingModule {}
