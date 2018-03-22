import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-s',
  templateUrl: 's.html',
})
export class SPage {

  constructor(private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SPage');
  }

}
