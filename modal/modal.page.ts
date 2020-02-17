import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  citta_nome: any;
  citta_desc: any;

  constructor(private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.citta_nome = this.navParams.get('citta');
    this.citta_desc = this.navParams.get('descrizione');
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
