/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.page.html',
  styleUrls: ['./shapes.page.scss'],
})
export class ShapesPage implements OnInit {

  ans = '';
  index;
  fi = [];
  score = 0;
  count = 0;
  isCorrect = false;
  qbnk = [];
  question_Bank: any = [
    {
      id: 1,
      name: 'q1',
      question: '../../assets/sounds/questions/identify circle.mp3',
      options: ['square', 'circle'],
      opimages: ['../../../assets/images/square.png', '../../../assets/images/circle.png'],
      answer: 'circle',
      verdict: ''
    },
    {
      id: 2,
      name: 'q2',
      question: '../../assets/sounds/questions/identify square.mp3',
      options: ['square', 'circle'],
      opimages: ['../../../assets/images/square.png', '../../../assets/images/circle.png'],
      answer: 'square',
      verdict: ''
    },
    {
      id: 3,
      name: 'q3',
      question: '../../assets/sounds/questions/identify triangle.mp3',
      options: ['star', 'triangle'],
      opimages: ['../../../assets/images/star.png', '../../../assets/images/triangle.png'],
      answer: 'triangle',
      verdict: ''
    },
    {
      id: 4,
      name: 'q4',
      question: '../../assets/sounds/questions/identify rectangle.mp3',
      options: ['rectangle', 'heart'],
      opimages: ['../../../assets/images/rectangle.png', '../../../assets/images/heart.png'],
      answer: 'rectangle',
      verdict: ''
    },
    {
      id: 5,
      name: 'q5',
      question: '../../assets/sounds/questions/identify star.mp3',
      options: ['star', 'triangle'],
      opimages: ['../../../assets/images/star.png', '../../../assets/images/triangle.png'],
      answer: 'star',
      verdict: ''
    },
    {
      id: 6,
      name: 'q6',
      question: '../../assets/sounds/questions/identify heart.mp3',
      options: ['rectangle', 'heart'],
      opimages: ['../../../assets/images/rectangle.png', '../../../assets/images/heart.png'],
      answer: 'heart',
      verdict: ''
    }
  ];

  constructor(private myService: ScoreService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    // this.myService.getScore().subscribe((data) => {
    //   this.score = data;
    // });

    this.quesBank();
  }

  checkAnswer(id) {
    this.index = this.qbnk.findIndex(x => x.id === id);
    if (this.ans === this.qbnk[this.index].answer) {
      this.qbnk[this.index].verdict = 'Correct';
      this.score++;
      this.isCorrect = true;
    }
    else {
      this.qbnk[this.index].verdict = 'Incorrect';
      this.isCorrect = false;
    }
    this.count++;
  }

  isQuestionAnswered(id) {
    // if(this.ans === ''){
    //   return true;
    // }
    this.index = this.qbnk.findIndex(x => x.id === id);
    if (this.qbnk[this.index].verdict.length > 0) {
      return true;
    }
    return false;
  }

  getColor(id) {
    this.index = this.question_Bank.findIndex(x => x.id === id);
    // console.log(this.index);
    if (this.question_Bank[this.index].verdict === 'Correct') {
      return 'green';
    }
    return 'red';
  }

  quesBank() {
    const shuffled = this.question_Bank.sort(() => 0.5 - Math.random());
    this.fi = [];
    this.score = 0;
    this.count = 0;
    this.isCorrect = false;
    this.qbnk = [];
    this.ans = '';
    this.index = 0;
    this.qbnk = shuffled.slice(0, 6);
    // console.log(this.qbnk);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      // subHeader: 'Important message',
      message: 'You have completed the quiz.',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          cssClass: 'primary',
          handler: () => {
            console.log('Navigate to tab3');
            this.router.navigate(['/tabs/tab3']);
            // delay(100);
            this.ngOnInit();
          }
        }
      ],
    });
    await alert.present();
  }

  isTestEnded() {
    if (this.count === 6) {
      return false;
    }
    return true;
  }

  EndTest() {
    this.myService.updateScore(this.score, 'Shapes', 'Noname');
    this.presentAlert();
    this.fi.push(this.myService.Shapes_Score[0]);
    console.log(this.fi);
  }

}
