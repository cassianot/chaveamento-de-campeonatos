import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/model/categoria.model';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.css']
})

export class ListacategoriasComponent {
  @Input() listaCategorias : Array<Categoria> = [];
  @Input() atualiza! : boolean;
  @Output() exibeMensagem = new EventEmitter<string>();
  @Output() ativaDesativarCategoria = new EventEmitter<Categoria>();
  @Output() editaCategoria = new EventEmitter<Categoria>();

  ativarDesativarCategoria (cat: Categoria) {
    console.log(this.atualiza);
    if(!this.atualiza) {
      cat.ativo = !cat.ativo;
      this.ativaDesativarCategoria.emit(cat);
    } else {
      this.exibeMensagem.emit("Não é possível ativar/desativar enquanto está editando uma categoria!");
    }
  }

  editarCategoria(cat: Categoria) {
    this.editaCategoria.emit(cat);
  }
}