/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  Alphabet_Score: any = [
    {
      id: 1,
      p_name: 'John',
      p_score: 4,
      p_topic: 'Alphabets',
      p_date: 'Oct 22 2022',
      p_time: '10:10 Am'
    }
  ];
  Numbers_Score: any = [
    {
      id: 1,
      p_name: 'Noname',
      p_score: 3,
      p_topic: 'Alphabets',
      p_date: 'Oct 22 2022',
      p_time: '10:23 Am'
    }
  ];
  Colors_Score: any = [
    {
      id: 1,
      p_name: 'Noname',
      p_score: 3,
      p_topic: 'Alphabets',
      p_date: 'Oct 22 2022',
      p_time: '10:23 Am'
    }
  ];
  Shapes_Score: any = [
    {
      id: 1,
      p_name: 'Noname',
      p_score: 3,
      p_topic: 'Alphabets',
      p_date: 'Oct 22 2022',
      p_time: '10:23 Am'
    }
  ];
  constructor() { }

  updateScore(score, topic, name) {
    if (topic === 'Alphabets') {
      this.Alphabet_Score.splice(0, 0, {
        id: this.Alphabet_Score.length + 1,
        p_name: name,
        p_score: score,
        p_topic: topic,
        p_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        p_time: new Date().toLocaleTimeString
      ('en-US', {
        hour: '2-digit',
        minute: '2-digit',
       })
      });
    } else if (topic === 'Numbers') {
      this.Numbers_Score.splice(0, 0, {
        id: this.Numbers_Score.length + 1,
        p_name: name,
        p_score: score,
        p_topic: topic,
        p_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        p_time: new Date().toLocaleTimeString
      ('en-US', {
        hour: '2-digit',
        minute: '2-digit',
       })
      });
    } else if (topic === 'Colors') {
      this.Colors_Score.splice(0, 0, {
        id: this.Colors_Score.length + 1,
        p_name: name,
        p_score: score,
        p_topic: topic,
        p_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        p_time: new Date().toLocaleTimeString
      ('en-US', {
        hour: '2-digit',
        minute: '2-digit',
       })
      });
    } else if (topic === 'Shapes') {
      this.Shapes_Score.splice(0, 0, {
        id: this.Shapes_Score.length + 1,
        p_name: name,
        p_score: score,
        p_topic: topic,
        p_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        p_time: new Date().toLocaleTimeString
      ('en-US', {
        hour: '2-digit',
        minute: '2-digit',
       })
      });
    }
  }



}
