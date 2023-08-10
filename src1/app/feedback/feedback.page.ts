
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})

export class FeedbackPage implements OnInit {
  constructor(private alertController: AlertController) { }
  ngOnInit() {
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Thank you.',
      subHeader: 'Your Feedback has been recorded.',
      buttons: ['OK'],
    });  

    await alert.present();
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';
    document.querySelector('ion-range').value = 1;
  }
}




