import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/model/categoria.model';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.css']
})

export class ListacategoriasComponent {
  @Input() listaCategorias : Categoria[] = [];
  @Input() atualiza! : boolean;
  @Output() ativaDesativarCategoria = new EventEmitter<Categoria>();
  @Output() editaCategoria = new EventEmitter<Categoria>();

  ativarDesativarCategoria (cat: Categoria) {
    if(!this.atualiza) {
      cat.ativo = !cat.ativo;
      this.ativaDesativarCategoria.emit(cat);
    } else {
      Util.exibirMensagem("Não é possível ativar/desativar enquanto está editando uma categoria!");
    }
  }

  editarCategoria(cat: Categoria) {
    this.editaCategoria.emit(cat);
  }
}