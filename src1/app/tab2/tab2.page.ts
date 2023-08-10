/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  answer: string;
  anstxt: string;
  index: number;
  score = 0;
  count =0;
  isCorrect = false;
  question_Bank: any = [
    {
      id: 1,
      name: 'q1',
      question: '../../assets/sounds/questions/identify A.mp3',
      options: ['P', 'B', 'A', 'L'],
      answer: 'A',
      verdict: ''
    },
    {
      id: 2,
      name: 'q2',
      question: '../../assets/sounds/questions/identify B.mp3',
      options: ['B', 'Z', 'D', 'R'],
      answer: 'B',
      verdict: ''
    },
 ];
  constructor() { }

  checkAnswer(id) {
    this.index = this.question_Bank.findIndex(x => x.id === id);

    console.log(this.answer);
    if (this.answer === this.question_Bank[this.index].answer) {
      this.question_Bank[this.index].verdict = 'Correct';
      this.score++;
      this.isCorrect = true;
    }
    else {
      this.question_Bank[this.index].verdict = 'Incorrect';
      this.isCorrect = false;
    }
    this.count = 1;
  }

  isQuestionAnswered(id){
    this.index = this.question_Bank.findIndex(x => x.id === id);
    if(this.count === 0){
      if (this.answer === undefined) {
        return true;
      }
      return false;
    }
    else{
      if (this.question_Bank[this.index].verdict.length > 0) {
        return true;
      }
      return false;
    }
  }

  getColor(id){
    this.index = this.question_Bank.findIndex(x => x.id === id);
    if (this.question_Bank[this.index].verdict === 'Correct'){
      return 'green';
    }
    return 'red';
  }

}
