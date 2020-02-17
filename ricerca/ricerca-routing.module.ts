import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RicercaPage } from './ricerca.page';

const routes: Routes = [
  {
    path: '',
    component: RicercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RicercaPageRoutingModule {}
