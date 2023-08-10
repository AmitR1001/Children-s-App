import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.page.html',
  styleUrls: ['./quiz2.page.scss'],
})
export class Quiz2Page implements OnInit {

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