import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private route: Router) { }
    
  Login(){
    this.route.navigate(['/login']);
  }
  Register(){
    this.route.navigate(['../registration']);
  }
  GuestPage(){
    this.route.navigate(['/guest']);
  }


  ngOnInit() {
  }

}
