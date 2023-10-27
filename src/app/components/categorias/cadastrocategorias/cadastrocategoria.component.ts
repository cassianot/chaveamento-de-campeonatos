import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/model/categoria.model';

@Component({

  selector: 'app-cadastro-categorias',
  templateUrl: './cadastrocategoria.component.html',
  styleUrls: ['./cadastrocategoria.component.css']

})
export class CadastroCategoriasComponent {

  @Input() categoria! : Categoria;
  @Input() atualiza! : boolean;
  @Input() listaCategorias : Array<Categoria> = [];
  @Output() exibeMensagem = new EventEmitter<string>();
  @Output() salvaCategoria = new EventEmitter<Categoria>();

  ngOnInit(){
    this.categoria = new Categoria("", "", true);
  }

  cadastraCategoria() : void {
    this.salvaCategoria.emit(this.categoria);
  }

  limpaFormulario(){
    this.categoria = new Categoria("", "", true);
  }

}
