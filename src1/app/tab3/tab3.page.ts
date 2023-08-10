
import { Component } from '@angular/core';
import { ScoreService } from '../score.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



  A_Score: any[] = this.myService.Alphabet_Score;
  B_Score: any[] = this.myService.Numbers_Score;



  constructor(private myService: ScoreService) {}



}
