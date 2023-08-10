/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  showObj = false;
  Alphabets: any = [
    {
      id: 1, name: 'Aa',
      image: '../../assets/images/Aa.png',
      objimg: '../../assets/images/ant.jpg',
      sound: '../../assets/sounds/a.mp3'
    },
    {
      id: 2, name: 'Bb',
      image: '../../assets/images/Bb.png',
      objimg: '../../assets/images/bat.jpg',
      sound: '../../assets/sounds/b.mp3'
    },
    {
      id: 3, name: 'Cc',
      image: '../../assets/images/Cc.png',
      objimg: '../../assets/images/cat.jpg',
      sound: '../../assets/sounds/c.mp3'
    },
    {
      id: 4, name: 'Dd',
      image: '../../assets/images/Dd.png',
      objimg: '../../assets/images/dog.jpg',
      sound: '../../assets/sounds/d.mp3'
    },
    {
      id: 5, name: 'Ee',
      image: '../../assets/images/Ee.png',
      objimg: '../../assets/images/egg.jpg',
      sound: '../../assets/sounds/e.mp3'
    }
  ];

  constructor() {}

  onClick(index) {
    if (this.showObj === true) {
      console.log(this.Alphabets[index].objimg);
      (document.getElementById(this.Alphabets[index].name) as HTMLImageElement).src = this.Alphabets[index].image;
      this.showObj = false;
    }
    else {
      (document.getElementById(this.Alphabets[index].name) as HTMLImageElement).src = this.Alphabets[index].objimg;
      this.showObj = true;
    }

  }

}
