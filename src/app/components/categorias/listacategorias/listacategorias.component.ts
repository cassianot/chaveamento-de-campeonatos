import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/model/categoria.model';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.css']
})

export class ListacategoriasComponent {
  @Input() listaCategorias : Array<Categoria> = [];
  @Output() exibeMensagem = new EventEmitter<string>();
  @Output() ativaDesativarCategoria = new EventEmitter<Categoria>();
  @Output() editaCategoria = new EventEmitter<Categoria>();

  removerCategoria(cat: Categoria): void {
    this.listaCategorias.splice(this.listaCategorias.indexOf(cat), 1);
    this.exibeMensagem.emit(`Categoria removida com sucesso: ${cat.nomeCategoria}`);
  }

  ativarDesativarCategoria (cat: Categoria) {
    cat.ativo = !cat.ativo;
    this.ativaDesativarCategoria.emit(cat);
  }

  editarCategoria(cat: Categoria) {
    this.editaCategoria.emit(cat);
  }
}