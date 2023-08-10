import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.page.html',
  styleUrls: ['./alphabets.page.scss'],
})
export class AlphabetsPage implements OnInit {

  showObj = false;
  Alphabets: any = [
    {
      id: 1, name: 'Aa',
      image: '../../assets/Alphabets/a.png',
      objimg: 'https://media1.giphy.com/media/MXKBeJdqHwpQdBTWXu/200w.webp?cid=ecf05e474uwoc0ra4066kcvo6n2rvaxnmmlfih9vogs4icrz&rid=200w.webp&ct=g',
      // objimg: '../../assets/Alphabets/apple.png',
      sound: '../../assets/sounds/a.mp3'
    },
    {
      id: 2, name: 'Bb',
      image: '../../assets/Alphabets/b.png',
      objimg: 'https://media0.giphy.com/media/qGCBtoppliRJB6AWQ1/200w.webp',
      sound: '../../assets/sounds/b.mp3'
    },
    {
      id: 3, name: 'Cc',
      image: '../../assets/Alphabets/c.png',
      objimg: 'https://i.gifer.com/Qd4H.gif',
      sound: '../../assets/sounds/c.mp3'
    },
    {
      id: 4, name: 'Dd',
      image: '../../assets/Alphabets/d.png',
      objimg: 'https://i.gifer.com/origin/16/16ff7760584bbdca930e598e83737f31_w200.webp',
      sound: '../../assets/sounds/d.mp3'
    },
    {
      id: 5, name: 'Ee',
      image: '../../assets/Alphabets/e.png',
      objimg: 'https://media1.giphy.com/media/C52WYMPoF3jC5NBKwW/200w.webp?cid=ecf05e474uwoc0ra4066kcvo6n2rvaxnmmlfih9vogs4icrz&rid=200w.webp&ct=g',
      sound: '../../assets/sounds/e.mp3'
    }];
  constructor() { }

  ngOnInit() {
  }
  onClick(index: string | number) {
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