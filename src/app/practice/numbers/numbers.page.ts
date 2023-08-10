/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

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
      question: '../../assets/sounds/questions/identify 1.mp3',
      options: ['1', '5'],
      opimages: ['../../../assets/images/1.jpeg', '../../../assets/images/5.jpeg'],
      answer: '1',
      verdict: ''
    },
    {
      id: 2,
      name: 'q2',
      question: '../../assets/sounds/questions/identify 2.mp3',
      options: ['2', '6'],
      opimages: ['../../../assets/images/2.jpeg', '../../../assets/images/6.jpeg'],
      answer: '2',
      verdict: ''
    },
    {
      id: 3,
      name: 'q3',
      question: '../../assets/sounds/questions/identify 3.mp3',
      options: ['3', '7'],
      opimages: ['../../../assets/images/3.jpeg', '../../../assets/images/7.jpeg'],
      answer: '3',
      verdict: ''
    },
    {
      id: 4,
      name: 'q4',
      question: '../../assets/sounds/questions/identify 4.mp3',
      options: ['4', '8'],
      opimages: ['../../../assets/images/4.jpeg', '../../../assets/images/8.jpeg'],
      answer: '4',
      verdict: ''
    },
    {
      id: 5,
      name: 'q5',
      question: '../../assets/sounds/questions/identify 5.mp3',
      options: ['5', '9'],
      opimages: ['../../../assets/images/5.jpeg', '../../../assets/images/9.jpeg'],
      answer: '5',
      verdict: ''
    },
    {
      id: 6,
      name: 'q6',
      question: '../../assets/sounds/questions/identify 6.mp3',
      options: ['6', '10'],
      opimages: ['../../../assets/images/6.jpeg', '../../../assets/images/10.jpeg'],
      answer: '6',
      verdict: ''
    },
    {
      id: 7,
      name: 'q7',
      question: '../../assets/sounds/questions/identify 7.mp3',
      options: ['4', '7'],
      opimages: ['../../../assets/images/4.jpeg', '../../../assets/images/7.jpeg'],
      answer: '7',
      verdict: ''
    },
    {
      id: 8,
      name: 'q8',
      question: '../../assets/sounds/questions/identify 8.mp3',
      options: ['8', '1'],
      opimages: ['../../../assets/images/8.jpeg', '../../../assets/images/1.jpeg'],
      answer: '8',
      verdict: ''
    },
    {
      id: 9,
      name: 'q9',
      question: '../../assets/sounds/questions/identify 9.mp3',
      options: ['7', '9'],
      opimages: ['../../../assets/images/7.jpeg', '../../../assets/images/9.jpeg'],
      answer: '9',
      verdict: ''
    },
    {
      id: 10,
      name: 'q10',
      question: '../../assets/sounds/questions/identify 10.mp3',
      options: ['10', '2'],
      opimages: ['../../../assets/images/10.jpeg', '../../../assets/images/2.jpeg'],
      answer: '10',
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
    this.myService.updateScore(this.score, 'Numbers', 'Noname');
    this.presentAlert();
    this.fi.push(this.myService.Numbers_Score[0]);
    console.log(this.fi);
  }

}
