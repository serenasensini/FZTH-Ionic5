import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Avviso',
      subHeader: 'Avviso di apertura',
      message: 'Questo messaggio viene visualizzato quando entri nel componente' + this.folder,
      buttons: ['OK']
    });

    await alert.present();
  }



}
