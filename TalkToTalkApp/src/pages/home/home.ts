import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  userLogin(indexType:string):void
  {
    console.log("sendedIndexType="+indexType);
    this.navCtrl.push(LoginPage, { data: indexType });
  }
}
