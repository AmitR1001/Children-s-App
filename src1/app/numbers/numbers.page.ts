import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

  showObj = false;

  Numbers: any = [
    {
      id: 0, name: 'Zero',
      image: 'https://media0.giphy.com/media/KuLvx2C1rRTynZR2ny/giphy.gif?cid=ecf05e47etusa89bsd2e0px0xcjgagai3y1d3wc08uiquqgo&rid=giphy.gif&ct=g',
      count: '../../assets/Numbers/zero.png',
      sound: '../../../assets/sounds/0.mp3'
    },
    {
      id: 1, name: 'One',
      image: 'https://media1.giphy.com/media/l0ExncehJzexFpRHq/200w.webp?cid=ecf05e477rs58907wqstn7d8441jnoc4fsvft5huf0ch7gpd&rid=200w.webp&ct=g',
      count: '../../assets/Numbers/one.png',
      sound: '../../../assets/sounds/1.mp3'
    },
    {
      id: 2, name: 'Two',
      image: 'https://media1.giphy.com/media/26gsqQxPQXHBiBEUU/200w.webp?cid=ecf05e473cpw1vdtkovsmz9iwvdt7ovzgflz3zrg4srg2wlg&rid=200w.webp&ct=g',
      count: 'https://media1.giphy.com/media/qiI73wOWAgn54c3gAC/200w.webp',
      sound: '../../../assets/sounds/2.mp3'
    },
    {
      id: 3, name: 'Three',
      image: 'https://media1.giphy.com/media/yoJC2xC7FRU3D7yguY/giphy.gif?cid=ecf05e47o0sdz03jcujn8xwo3wtu1l4x9p9zyewkgh4tse5m&rid=giphy.gif&ct=g',
      count: '../../assets/Numbers/three.png',
      sound: '../../../assets/sounds/4.mp3'
    },
    {
      id: 4, name: 'Four',
      image: 'https://media4.giphy.com/media/3rgXBvGjDBXeosLQNa/giphy.webp?cid=ecf05e471yzxhi6l7xf166jqxeogck5qbn9mjvwrr1uckaj7&rid=giphy.webp&ct=g',
      count: 'https://media2.giphy.com/media/920qApPuMRQqdC4kOR/200w.webp?cid=ecf05e471yzxhi6l7xf166jqxeogck5qbn9mjvwrr1uckaj7&rid=200w.webp&ct=g',
      sound: '../../../assets/sounds/4.mp3'
    },
    {
      id: 5, name: 'Five',
      image: 'https://media4.giphy.com/media/l0ExvMqtnw7aTzPCE/200w.webp?cid=ecf05e477rs58907wqstn7d8441jnoc4fsvft5huf0ch7gpd&rid=200w.webp&ct=g',
      count: '../../assets/Numbers/five.png',
      sound: '../../../assets/sounds/5.mp3'
    },
    {
      id: 6, name: 'Six',
      image: 'https://media3.giphy.com/media/l0Ex9pftnvPgw0nPa/200w.webp?cid=ecf05e477rs58907wqstn7d8441jnoc4fsvft5huf0ch7gpd&rid=200w.webp&ct=g',
      count: '../../assets/Numbers/six.png',
      sound: '../../../assets/sounds/6.mp3'
    },
    {
      id: 7, name: 'Seven',
      image: 'https://media1.giphy.com/media/l0ExiSoCkhCfSm94k/200w.webp?cid=ecf05e477rs58907wqstn7d8441jnoc4fsvft5huf0ch7gpd&rid=200w.webp&ct=g',
      count: '../../assets/Numbers/seven.png',
      sound: '../../../assets/sounds/7.mp3'
    },
    {
      id: 8, name: 'Eight',
      image: 'https://media0.giphy.com/media/26gsasKHkeH0VP8d2/200w.webp?cid=ecf05e477rs58907wqstn7d8441jnoc4fsvft5huf0ch7gpd&rid=200w.webp&ct=g',
      count: '../../assets/Numbers/eight.png',
      sound: '../../../assets/sounds/8.mp3'
    },
    {
      id: 9, name: 'Nine',
      image: 'https://media0.giphy.com/media/XgH5Ex381yXMzRQGxh/200w.webp?cid=ecf05e4722plaon2tgyjhx0perwvrw49ohzudq5jh1qjbb52&rid=200w.webp&ct=g',
      count: '../../assets/Numbers/nine.png',
      sound: '../../../assets/sounds/9.mp3'
    },
    {
      id: 10, name: 'Ten',
      image: 'https://media0.giphy.com/media/SX0ohh6qmujAoos1OR/200w.webp?cid=ecf05e47l368iz0dnp0hi22bgxjjfdk9l9rk87ubci9vc9x7&rid=200w.webp&ct=g',
      count: '../../assets/Numbers/ten.png',
      sound: '../../../assets/sounds/10.mp3'
    }
  ];
  constructor() { }

  ngOnInit() { }

  onClick(index) {
    if (this.showObj === true) {
      console.log(this.Numbers[index].count);
      (document.getElementById(this.Numbers[index].name) as HTMLImageElement).src = this.Numbers[index].image;
      this.showObj = false;
    }
    else {
      (document.getElementById(this.Numbers[index].name) as HTMLImageElement).src = this.Numbers[index].count;
      this.showObj = true;
    }

  }

}