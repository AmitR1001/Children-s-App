/* eslint-disable @typescript-eslint/naming-convention */
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
  C_Score: any[] = this.myService.Colors_Score;
  D_Score: any[] = this.myService.Shapes_Score;


  constructor(private myService: ScoreService) {}



}
