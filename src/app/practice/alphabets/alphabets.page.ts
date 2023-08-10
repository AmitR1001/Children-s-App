/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.page.html',
  styleUrls: ['./alphabets.page.scss'],
})
export class AlphabetsPage implements OnInit {

  ans = '';
  index;
  fi=[];
  score = 0;
  count = 0;
  isCorrect = false;
  qbnk = [];
  question_Bank: any = [
    {
      id: 1,
      name: 'q1',
      question: '../../assets/sounds/questions/identify A.mp3',
      options: ['P', 'A'],
      opimages: ['../../../assets/images/Pp.png', '../../../assets/images/Aa.png'],
      answer: 'A',
      verdict: ''
    },
    {
      id: 2,
      name: 'q2',
      question: '../../assets/sounds/questions/identify B.mp3',
      options: ['B', 'Z'],
      opimages: ['../../../assets/images/Bb.png', '../../../assets/images/Zz.png'],
      answer: 'B',
      verdict: ''
    },
    {
      id: 3,
      name: 'q3',
      question: '../../assets/sounds/questions/identify C.mp3',
      options: ['C', 'D'],
      opimages: ['../../../assets/images/Cc.png', '../../../assets/images/Dd.png'],
      answer: 'C',
      verdict: ''
    },
    {
      id: 4,
      name: 'q4',
      question: '../../assets/sounds/questions/identify D.mp3',
      options: ['D', 'C'],
      opimages: ['../../../assets/images/Dd.png', '../../../assets/images/Cc.png'],
      answer: 'D',
      verdict: ''
    },
    {
      id: 5,
      name: 'q5',
      question: '../../assets/sounds/questions/identify E.mp3',
      options: ['E', 'F'],
      opimages: ['../../../assets/images/Ee.png', '../../../assets/images/Ff.png'],
      answer: 'E',
      verdict: ''
    },
    {
      id: 6,
      name: 'q6',
      question: '../../assets/sounds/questions/identify F.mp3',
      options: ['F', 'E'],
      opimages: ['../../../assets/images/Ff.png', '../../../assets/images/Ee.png'],
      answer: 'F',
      verdict: ''
    },
    {
      id: 7,
      name: 'q7',
      question: '../../assets/sounds/questions/identify G.mp3',
      options: ['G', 'H'],
      opimages: ['../../../assets/images/Gg.png', '../../../assets/images/Hh.png'],
      answer: 'G',
      verdict: ''
    },
    {
      id: 8,
      name: 'q8',
      question: '../../assets/sounds/questions/identify H.mp3',
      options: ['H', 'G'],
      opimages: ['../../../assets/images/Hh.png', '../../../assets/images/Gg.png'],
      answer: 'H',
      verdict: ''
    },
    {
      id: 9,
      name: 'q9',
      question: '../../assets/sounds/questions/identify I.mp3',
      options: ['I', 'J'],
      opimages: ['../../../assets/images/Ii.png', '../../../assets/images/Jj.png'],
      answer: 'I',
      verdict: ''
    },
    {
      id: 10,
      name: 'q10',
      question: '../../assets/sounds/questions/identify J.mp3',
      options: ['J', 'I'],
      opimages: ['../../../assets/images/Jj.png', '../../../assets/images/Ii.png'],
      answer: 'J',
      verdict: ''
    },
    {
      id: 11,
      name: 'q11',
      question: '../../assets/sounds/questions/identify K.mp3',
      options: ['K', 'L'],
      opimages: ['../../../assets/images/Kk.png', '../../../assets/images/Ll.png'],
      answer: 'K',
      verdict: ''
    },
    {
      id: 12,
      name: 'q12',
      question: '../../assets/sounds/questions/identify L.mp3',
      options: ['L', 'K'],
      opimages: ['../../../assets/images/Ll.png', '../../../assets/images/Kk.png'],
      answer: 'L',
      verdict: ''
    },
    {
      id: 13,
      name: 'q13',
      question: '../../assets/sounds/questions/identify M.mp3',
      options: ['R', 'M'],
      opimages: ['../../../assets/images/Rr.png', '../../../assets/images/Mm.png'],
      answer: 'M',
      verdict: ''
    },
    {
      id: 14,
      name: 'q14',
      question: '../../assets/sounds/questions/identify N.mp3',
      options: ['N', 'Y'],
      opimages: ['../../../assets/images/Nn.png', '../../../assets/images/Yy.png'],
      answer: 'N',
      verdict: ''
    },
    {
      id: 15,
      name: 'q15',
      question: '../../assets/sounds/questions/identify O.mp3',
      options: ['P', 'I'],
      opimages: ['../../../assets/images/Pp.png', '../../../assets/images/Ii.png'],
      answer: 'O',
      verdict: ''
    },
    {
      id: 16,
      name: 'q16',
      question: '../../assets/sounds/questions/identify P.mp3',
      options: ['P', 'C'],
      opimages: ['../../../assets/images/Pp.png', '../../../assets/images/Cc.png'],
      answer: 'P',
      verdict: ''
    },
    {
      id: 17,
      name: 'q17',
      question: '../../assets/sounds/questions/identify Q.mp3',
      options: ['N', 'Q'],
      opimages: ['../../../assets/images/Nn.png', '../../../assets/images/Qq.png'],
      answer: 'Q',
      verdict: ''
    },
    {
      id: 18,
      name: 'q18',
      question: '../../assets/sounds/questions/identify R.mp3',
      options: ['R', 'G'],
      opimages: ['../../../assets/images/Rr.png', '../../../assets/images/Gg.png'],
      answer: 'R',
      verdict: ''
    },
    {
      id: 19,
      name: 'q19',
      question: '../../assets/sounds/questions/identify S.mp3',
      options: ['S', 'Z'],
      opimages: ['../../../assets/images/Ss.png', '../../../assets/images/Zz.png'],
      answer: 'S',
      verdict: ''
    },
    {
      id: 20,
      name: 'q20',
      question: '../../assets/sounds/questions/identify T.mp3',
      options: ['T', 'L'],
      opimages: ['../../../assets/images/Tt.png', '../../../assets/images/Ll.png'],
      answer: 'T',
      verdict: ''
    },
    {
      id: 21,
      name: 'q21',
      question: '../../assets/sounds/questions/identify U.mp3',
      options: ['U', 'B'],
      opimages: ['../../../assets/images/Uu.png', '../../../assets/images/Bb.png'],
      answer: 'U',
      verdict: ''
    },
    {
      id: 22,
      name: 'q22',
      question: '../../assets/sounds/questions/identify V.mp3',
      options: ['V', 'H'],
      opimages: ['../../../assets/images/Vv.png', '../../../assets/images/Hh.png'],
      answer: 'V',
      verdict: ''
    },
    {
      id: 23,
      name: 'q23',
      question: '../../assets/sounds/questions/identify W.mp3',
      options: ['W', 'A'],
      opimages: ['../../../assets/images/Ww.png', '../../../assets/images/Aa.png'],
      answer: 'W',
      verdict: ''
    },
    {
      id: 24,
      name: 'q24',
      question: '../../assets/sounds/questions/identify X.mp3',
      options: ['X', 'Q'],
      opimages: ['../../../assets/images/Xx.png', '../../../assets/images/Qq.png'],
      answer: 'X',
      verdict: ''
    },
    {
      id: 25,
      name: 'q25',
      question: '../../assets/sounds/questions/identify Y.mp3',
      options: ['D', 'Y'],
      opimages: ['../../../assets/images/Dd.png', '../../../assets/images/Yy.png'],
      answer: 'Y',
      verdict: ''
    },
    {
      id: 26,
      name: 'q26',
      question: '../../assets/sounds/questions/identify Z.mp3',
      options: ['J', 'Z'],
      opimages: ['../../../assets/images/Jj.png', '../../../assets/images/Zz.png'],
      answer: 'Z',
      verdict: ''
    }
  ];

  constructor(private myService: ScoreService, private alertController: AlertController, private router: Router) {}

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

  isQuestionAnswered(id){
    // if(this.ans === ''){
    //   return true;
    // }
    this.index = this.qbnk.findIndex(x => x.id === id);
      if (this.qbnk[this.index].verdict.length > 0) {
        return true;
      }
      return false;
  }

  getColor(id){
    this.index = this.question_Bank.findIndex(x => x.id === id);
    // console.log(this.index);
    if (this.question_Bank[this.index].verdict === 'Correct'){
      return 'green';
    }
    return 'red';
  }

  quesBank(){
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

  isTestEnded(){
    if (this.count === 5){
      return false;
    }
    return true;
  }

  EndTest(){
    this.myService.updateScore(this.score, 'Alphabets', 'Noname');
    this.presentAlert();
    this.fi.push(this.myService.Alphabet_Score[0]);
    console.log(this.fi);
  }

}
