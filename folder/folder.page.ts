import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AlertController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  cittaPartenza: string;
  cittaArrivo: string;
  cittaRitornoDisab = true;

  form: FormGroup;
  submitted = false;


  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController, private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.form = this.formBuilder.group({
      cittaPartenza: ['', Validators.required],
      cittaRitorno: [''],
      dataPartenza: ['', [Validators.required]],
      dataRitorno: ['']
    });

  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Avviso',
      subHeader: 'Avviso di apertura',
      message: 'Questo messaggio viene visualizzato quando apri l\'app.',
      buttons: ['OK']
    });
    await alert.present();
  }

  setDisabled() {
    if (this.cittaPartenza.length !== 0) {
      this.cittaRitornoDisab = false;
    }
  }

}
