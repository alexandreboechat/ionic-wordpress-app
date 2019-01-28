import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetalhePage } from '../detalhe/detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public itens: any = [];
  private per_page:number = 8;
  private page:number = 1;

  constructor(public navCtrl: NavController, public api: ApiProvider, public navParams: NavParams) {
    //log correspondente ao ID de cada categoria
    console.log(this.navParams.get('cat_id'));
    this.getPosts();
  }

  getPosts(){
    this.api.get('posts?_embed&per_page='+this.per_page + '&page='+this.page).subscribe((data) => {
      this.itens = this.itens.concat(data);
      this.page++;
    });
  }
  
  abrirDetalhe(item){
    this.navCtrl.push(DetalhePage, {post:item});
  }
  
  pegarNomeCat(cat_id:number){
    let cat_name:string = '';
    this.api.Categorias.forEach(element => {
      if(element.id==cat_id){
        cat_name = element.name;
      }
    });

    return cat_name;
  }

}
