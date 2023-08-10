/* eslint-disable @typescript-eslint/naming-convention */
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
      id: 1, name: 'One',
      image: '../../../assets/images/1.jpeg',
      count: '../../../assets/images/one.png',
      sound: '../../../assets/sounds/en_num_01.mp3'
    },
    {
      id: 2, name: 'Two',
      image: '../../../assets/images/2.jpeg',
      count: '../../../assets/images/two.png',
      sound: '../../../assets/sounds/en_num_02.mp3'
    },
    {
      id: 3, name: 'Three',
      image: '../../../assets/images/3.jpeg',
      count: '../../../assets/images/three.png',
      sound: '../../../assets/sounds/en_num_03.mp3'
    },
    {
      id: 4, name: 'Four',
      image: '../../../assets/images/4.jpeg',
      count: '../../../assets/images/four.png',
      sound: '../../../assets/sounds/en_num_04.mp3'
    },
    {
      id: 5, name: 'Five',
      image: '../../../assets/images/5.jpeg',
      count: '../../../assets/images/five.png',
      sound: '../../../assets/sounds/en_num_05.mp3'
    },
    {
      id: 6, name: 'Six',
      image: '../../../assets/images/6.jpeg',
      count: '../../../assets/images/six.jpg',
      sound: '../../../assets/sounds/en_num_06.mp3'
    },
    {
      id: 7, name: 'Seven',
      image: '../../../assets/images/7.jpeg',
      count: '../../../assets/images/seven.jpg',
      sound: '../../../assets/sounds/en_num_07.mp3'
    },
    {
      id: 8, name: 'Eight',
      image: '../../../assets/images/8.jpeg',
      count: '../../../assets/images/eight.png',
      sound: '../../../assets/sounds/en_num_08.mp3'
    },
    {
      id: 9, name: 'Nine',
      image: '../../../assets/images/9.jpeg',
      count: '../../../assets/images/nine.jpg',
      sound: '../../../assets/sounds/en_num_09.mp3'
    },
    {
      id: 10, name: 'Ten',
      image: '../../../assets/images/10.jpeg',
      count: '../../../assets/images/ten.png',
      sound: '../../../assets/sounds/en_num_10.mp3'
    }
  ];
  constructor() {}

  ngOnInit() {}

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
