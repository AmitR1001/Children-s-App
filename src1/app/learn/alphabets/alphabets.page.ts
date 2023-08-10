/* eslint-disable @typescript-eslint/naming-convention */
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
      image: '../../assets/images/a.jpg',
      objimg: '../../assets/images/ant.jpg',
      sound: '../../assets/sounds/a.mp3'
    },
    {
      id: 2, name: 'Bb',
      image: '../../assets/images/b.jpg',
      objimg: '../../assets/images/ball.jpg',
      sound: '../../assets/sounds/b.mp3'
    },
    {
      id: 3, name: 'Cc',
      image: '../../assets/images/c.jpg',
      objimg: '../../assets/images/cat.jpg',
      sound: '../../assets/sounds/c.mp3'
    },
    {
      id: 4, name: 'Dd',
      image: '../../assets/images/d.jpg',
      objimg: '../../assets/images/dog.jpg',
      sound: '../../assets/sounds/d.mp3'
    },
    {
      id: 5, name: 'Ee',
      image: '../../assets/images/e.jpg',
      objimg: '../../assets/images/egg1.jpg',
      sound: '../../assets/sounds/e1.mp3'
    },
    {
      id: 6, name: 'Ff',
      image: '../../assets/images/f.jpg',
      objimg: '../../assets/images/fish.jpg',
      sound: '../../assets/sounds/f.mp3'
    },
    {
      id: 7, name: 'Gg',
      image: '../../assets/images/g.jpg',
      objimg: '../../assets/images/giraffe.jpg',
      sound: '../../assets/sounds/g.mp3'
    },
    {
      id: 8, name: 'Hh',
      image: '../../assets/images/h.jpg',
      objimg: '../../assets/images/hat.jpg',
      sound: '../../assets/sounds/h.mp3'
    },
    {
      id: 9, name: 'Ii',
      image: '../../assets/images/i.jpg',
      objimg: '../../assets/images/icecream.jpg',
      sound: '../../assets/sounds/i.mp3'
    },
    {
      id: 10, name: 'Jj',
      image: '../../assets/images/j.jpg',
      objimg: '../../assets/images/jam.jpg',
      sound: '../../assets/sounds/j.mp3'
    },
    {
      id: 11, name: 'Kk',
      image: '../../assets/images/k.jpg',
      objimg: '../../assets/images/kite.jpg',
      sound: '../../assets/sounds/k.mp3'
    },
    {
      id: 12, name: 'Ll',
      image: '../../assets/images/l.jpg',
      objimg: '../../assets/images/lion.jpg',
      sound: '../../assets/sounds/l.mp3'
    },
    {
      id: 13, name: 'Mm',
      image: '../../assets/images/m.jpg',
      objimg: '../../assets/images/monkey.jpg',
      sound: '../../assets/sounds/m.mp3'
    },
    {
      id: 14, name: 'Nn',
      image: '../../assets/images/n.jpg',
      objimg: '../../assets/images/nest.jpg',
      sound: '../../assets/sounds/n.mp3'
    },
    {
      id: 15, name: 'Oo',
      image: '../../assets/images/o.jpg',
      objimg: '../../assets/images/owl.jpg',
      sound: '../../assets/sounds/o.mp3'
    },
    {
      id: 16, name: 'Pp',
      image: '../../assets/images/p.jpg',
      objimg: '../../assets/images/penguin.jpg',
      sound: '../../assets/sounds/p.mp3'
    },
    {
      id: 17, name: 'Qq',
      image: '../../assets/images/q.jpg',
      objimg: '../../assets/images/queen.jpg',
      sound: '../../assets/sounds/q.mp3'
    },
    {
      id: 18, name: 'Rr',
      image: '../../assets/images/r.jpg',
      objimg: '../../assets/images/rabbit.jpg',
      sound: '../../assets/sounds/r.mp3'
    },
    {
      id: 19, name: 'Ss',
      image: '../../assets/images/s.jpg',
      objimg: '../../assets/images/sheep.jpg',
      sound: '../../assets/sounds/s.mp3'
    },
    {
      id: 20, name: 'Tt',
      image: '../../assets/images/t.jpg',
      objimg: '../../assets/images/turtle.jpg',
      sound: '../../assets/sounds/t.mp3'
    },
    {
      id: 21, name: 'Uu',
      image: '../../assets/images/u.jpg',
      objimg: '../../assets/images/umbrella.jpg',
      sound: '../../assets/sounds/u.mp3'
    },
    {
      id: 22, name: 'Vv',
      image: '../../assets/images/v.jpg',
      objimg: '../../assets/images/vase.jpg',
      sound: '../../assets/sounds/v.mp3'
    },
    {
      id: 23, name: 'Ww',
      image: '../../assets/images/w.jpg',
      objimg: '../../assets/images/whale.jpg',
      sound: '../../assets/sounds/w.mp3'
    },
    {
      id: 24, name: 'Xx',
      image: '../../assets/images/x.jpg',
      objimg: '../../assets/images/xray.jpg',
      sound: '../../assets/sounds/x.mp3'
    },
    {
      id: 25, name: 'Yy',
      image: '../../assets/images/y.jpg',
      objimg: '../../assets/images/yalk.jpg',
      sound: '../../assets/sounds/y.mp3'
    },
    {
      id: 26, name: 'Zz',
      image: '../../assets/images/z.jpg',
      objimg: '../../assets/images/zebra.jpg',
      sound: '../../assets/sounds/z.mp3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

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
