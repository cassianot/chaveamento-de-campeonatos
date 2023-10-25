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

  removerCategoria(cat: Categoria): void {
    this.listaCategorias.splice(this.listaCategorias.indexOf(cat), 1);
    this.exibeMensagem.emit(`Categoria removida com sucesso: ${cat.nomeCategoria}`);
  }
}