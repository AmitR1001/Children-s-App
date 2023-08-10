import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(platorm: Platform, public router:Router) {

  platorm.ready().then(()=> {
    this.router.navigateByUrl('splash');
  })
  }
}



