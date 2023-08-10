/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage implements OnInit {

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
      question: '../../assets/sounds/questions/identify red.mp3',
      options: ['red', 'black'],
      opimages: ['../../../assets/images/red.png', '../../../assets/images/black.png'],
      answer: 'red',
      verdict: ''
    },
    {
      id: 2,
      name: 'q2',
      question: '../../assets/sounds/questions/identify blue.mp3',
      options: ['blue', 'green'],
      opimages: ['../../../assets/images/blue.png', '../../../assets/images/green.png'],
      answer: 'blue',
      verdict: ''
    },
    {
      id: 3,
      name: 'q3',
      question: '../../assets/sounds/questions/identify green.mp3',
      options: ['green', 'yellow'],
      opimages: ['../../../assets/images/green.png', '../../../assets/images/yellow.png'],
      answer: 'green',
      verdict: ''
    },
    {
      id: 4,
      name: 'q4',
      question: '../../assets/sounds/questions/identify yellow.mp3',
      options: ['yellow', 'red'],
      opimages: ['../../../assets/images/yellow.png', '../../../assets/images/red.png'],
      answer: 'yellow',
      verdict: ''
    },
    {
      id: 5,
      name: 'q5',
      question: '../../assets/sounds/questions/identify black.mp3',
      options: ['black', 'blue'],
      opimages: ['../../../assets/images/black.png', '../../../assets/images/blue.png'],
      answer: 'black',
      verdict: ''
    },
    {
      id: 6,
      name: 'q6',
      question: '../../assets/sounds/questions/identify pink.mp3',
      options: ['pink', 'gray'],
      opimages: ['../../../assets/images/pink.png', '../../../assets/images/gray.png'],
      answer: 'pink',
      verdict: ''
    },
    {
      id: 7,
      name: 'q7',
      question: '../../assets/sounds/questions/identify gray.mp3',
      options: ['gray', 'pink'],
      opimages: ['../../../assets/images/gray.png', '../../../assets/images/pink.png'],
      answer: 'gray',
      verdict: ''
    },
    {
      id: 8,
      name: 'q8',
      question: '../../assets/sounds/questions/identify orange.mp3',
      options: ['orange', 'purple'],
      opimages: ['../../../assets/images/orange.png', '../../../assets/images/purple.png'],
      answer: 'orange',
      verdict: ''
    },
    {
      id: 9,
      name: 'q9',
      question: '../../assets/sounds/questions/identify purple.mp3',
      options: ['purple', 'orange'],
      opimages: ['../../../assets/images/purple.png', '../../../assets/images/orange.png'],
      answer: 'purple',
      verdict: ''
    },
    {
      id: 10,
      name: 'q10',
      question: '../../assets/sounds/questions/identify brown.mp3',
      options: ['brown', 'yellow'],
      opimages: ['../../../assets/images/brown.png', '../../../assets/images/yellow.png'],
      answer: 'brown',
      verdict: ''
    },
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
    this.qbnk = shuffled.slice(0, 5);
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
    if (this.count === 5) {
      return false;
    }
    return true;
  }

  EndTest() {
    this.myService.updateScore(this.score, 'Colors', 'Noname');
    this.presentAlert();
    this.fi.push(this.myService.Colors_Score[0]);
    console.log(this.fi);
  }

}
