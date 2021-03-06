import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  public openPage() {
    this.navCtrl.setRoot(MenuPage);
  }

}
