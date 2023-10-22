import { Component } from '@angular/core';
import { Categoria } from 'src/app/model/categoria.model';

@Component({

  selector: 'app-cadastro-categorias',
  templateUrl: './cadastro-categorias.component.html',
  styleUrls: ['./cadastro-categorias.component.css']

})
export class CadastroCategoriasComponent {

  categoria!: Categoria;
  listaCategorias: Array<Categoria> = [];

  ngOnInit(){
    this.categoria = new Categoria("", "");
  }

  onButtonClick() {
    M.toast({html: `Categoria adicionada com sucesso: ${this.categoria.nomeCategoria}`, classes: 'rounded'});
    this.categoria.setId(Math.floor(Math.random() * 10000));
    this.listaCategorias.push(this.categoria);
    this.categoria = new Categoria("", "");
  }

  deactivateCategoria(cat: Categoria){
    this.listaCategorias = this.listaCategorias.filter(({ id }) => id !== cat.id);
    M.toast({html: `Categoria removida com sucesso: ${cat.nomeCategoria}`, classes: 'rounded'});
  }

}
