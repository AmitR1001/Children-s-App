/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  @Input() rating: number;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;


  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Thank You!',
      // subHeader: 'Important message',
      message: 'Your feedback has been recorded.',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          cssClass: 'primary',
          handler: () => {
            console.log('Navigate to Tab1');
            this.router.navigate(['/tabs/tab1']);
            this.ngOnInit();
          }
        }
      ],
    });
    await alert.present();

    document.querySelector('ion-input').value = '';
    document.querySelector('ion-textarea').value = '';
    document.querySelector('ion-radio-group').value = '';
    this.rate(6);
  }


    rate(index: number) {
    this.rating = index;
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return COLORS.GREY;
    }
    switch (this.rating) {
      case 1:
      case 2:
        return COLORS.RED;
      case 3:
        return COLORS.YELLOW;
      case 4:
      case 5:
        return COLORS.GREEN;
      default:
        return COLORS.GREY;
    }
  }
  isAboveRating(index: number): boolean {
    return index > this.rating;
  }
}

enum COLORS {
  GREY = '#e0e0e0',
  GREEN = '#4caf50',
  YELLOW = '#ffeb3b',
  RED = '#f44336'
}
