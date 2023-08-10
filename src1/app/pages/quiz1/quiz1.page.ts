import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.page.html',
  styleUrls: ['./quiz1.page.scss'],
})
export class Quiz1Page implements OnInit {

  constructor() {}
  getResults() {
    
    var amountCorrect = 0;
    for(var i = 1; i <= 3; i++) {
      var radiosName = document.getElementsByName('answer'+i);
  
      for(var j = 0; j < radiosName.length; j++) {
        var radiosValue = radiosName[j];
        if((radiosValue as HTMLInputElement).value == "correct" && (radiosValue as HTMLInputElement).checked) {
          amountCorrect++;
          radiosValue.style.color = "green";
        }
      }
    }
  document.getElementById('right').innerHTML =
  "Total Correct Answers " + amountCorrect;
  document.getElementById('wrong').innerHTML =
  "Total Wrong Answers " + (3-amountCorrect);
  
  }
  ngOnInit() {
  }
}