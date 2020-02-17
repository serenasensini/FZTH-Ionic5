import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopoverPage} from '../popover/popover.page';

@Component({
  selector: 'app-offerte',
  templateUrl: './offerte.page.html',
  styleUrls: ['./offerte.page.scss'],
})
export class OffertePage implements OnInit {

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


}
