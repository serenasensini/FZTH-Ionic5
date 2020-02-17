import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.page.html',
  styleUrls: ['./ricerca.page.scss'],
})
export class RicercaPage implements OnInit {

  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Caricamento in corso...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }

  ngOnInit() {
    this.presentLoading();
  }

}
