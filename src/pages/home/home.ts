import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public api: ApiProvider, public navParams: NavParams) {
    //log correspondente ao ID de cada categoria
    console.log(this.navParams.get('cat_id'));
  }

}
