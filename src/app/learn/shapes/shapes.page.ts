/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.page.html',
  styleUrls: ['./shapes.page.scss'],
})
export class ShapesPage implements OnInit {

  Shapes: any = [
    {
      id: 1,
      name: 'Circle',
      image: '../../../assets/images/circle.png',
      sound: '../../../assets/sounds/circle.mp3'
    },
    {
      id: 2,
      name: 'Square',
      image: '../../../assets/images/square.png',
      sound: '../../../assets/sounds/square.mp3'
    },
    {
      id: 3,
      name: 'Triangle',
      image: '../../../assets/images/triangle.png',
      sound: '../../../assets/sounds/triangle.mp3'
    },
    {
      id: 4,
      name: 'Rectangle',
      image: '../../../assets/images/rectangle.png',
      sound: '../../../assets/sounds/rectangle.mp3'
    },
    {
      id: 5,
      name: 'Star',
      image: '../../../assets/images/star.png',
      sound: '../../../assets/sounds/star.mp3'
    },
    {
      id: 6,
      name: 'Heart',
      image: '../../../assets/images/heart.png',
      sound: '../../../assets/sounds/heart.mp3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
