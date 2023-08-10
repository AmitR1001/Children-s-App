/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage implements OnInit {

  Colors: any = [
    {
      id: 1,
      name: 'Red',
      image: '../../../assets/images/red.png',
      sound: '../../../assets/sounds/red.mp3'
     },
    {
      id: 2,
      name: 'Blue',
      image: '../../../assets/images/blue.png',
      sound: '../../../assets/sounds/blue.mp3'
    },
    {
      id: 3,
      name: 'Green',
      image: '../../../assets/images/green.png',
      sound: '../../../assets/sounds/green.mp3'
    },
    {
      id: 4,
      name: 'Yellow',
      image: '../../../assets/images/yellow.png',
      sound: '../../../assets/sounds/yellow.mp3'
    },
    {
      id: 5,
      name: 'Orange',
      image: '../../../assets/images/orange.png',
      sound: '../../../assets/sounds/orange.mp3'
    },
    {
      id: 6,
      name: 'Purple',
      image: '../../../assets/images/purple.png',
      sound: '../../../assets/sounds/purple.mp3'
    },
    {
      id: 7,
      name: 'Pink',
      image: '../../../assets/images/pink.png',
      sound: '../../../assets/sounds/pink.mp3'
    },
    {
      id: 8,
      name: 'Brown',
      image: '../../../assets/images/brown.png',
      sound: '../../../assets/sounds/brown.mp3'
    },
    {
      id: 9,
      name: 'Black',
      image: '../../../assets/images/black.png',
      sound: '../../../assets/sounds/black.mp3'
    },
    {
      id: 10,
      name: 'Gray',
      image: '../../../assets/images/gray.png',
      sound: '../../../assets/sounds/gray.mp3'
    }
  ];
  constructor() { }

  ngOnInit() {
  }


}
