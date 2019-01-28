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
  private per_page: number = 8;
  private page: number = 1;
  private mostrarCarregarMais = false;
  private Carregando = false;

  constructor(public navCtrl: NavController, public api: ApiProvider, public navParams: NavParams) {
    //log correspondente ao ID de cada categoria
    console.log(this.navParams.get('cat_id'));
    this.getPosts();
  }

  getPosts() {
    if (!this.Carregando) {
      this.Carregando = true;
      this.api.get('posts?_embed&per_page='+this.per_page +'&page='+this.page)
        .subscribe((data) => {
          this.Carregando =  false;
          this.itens = this.itens.concat(data);
          if (data.lenght === this.per_page){
            this.page++;
            this.mostrarCarregarMais = true;
          } else {
            this.mostrarCarregarMais = false;
          }
          // Prevenindo erro quando se esgotar o número de páginas para exibição
        }, (error) => {
          this.Carregando =  false;
          if (error.code == "rest_post_invalid_page_number") {
            this.mostrarCarregarMais = false;
          }
        });
    }
  }

  abrirDetalhe(item) {
    this.navCtrl.push(DetalhePage, { post: item });
  }

  pegarNomeCat(cat_id: number) {
    let cat_name: string = '';
    this.api.Categorias.forEach(element => {
      if (element.id == cat_id) {
        cat_name = element.name;
      }
    });

    return cat_name;
  }

}
