import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  public post:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post =  navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
