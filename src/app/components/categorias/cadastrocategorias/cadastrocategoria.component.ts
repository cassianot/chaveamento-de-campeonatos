import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/model/categoria.model';

@Component({

  selector: 'app-cadastro-categorias',
  templateUrl: './cadastrocategoria.component.html',
  styleUrls: ['./cadastrocategoria.component.css']

})
export class CadastroCategoriasComponent {

  categoria!: Categoria;
  @Input() listaCategorias : Array<Categoria> = [];
  @Output() exibeMensagem = new EventEmitter<string>();

  ngOnInit(){
    this.categoria = new Categoria("", "");
  }

  cadastraCategoria() : void {
    this.categoria.setId(Math.floor(Math.random() * 10000));
    this.listaCategorias.push(this.categoria);
    this.exibeMensagem.emit(`Categoria adicionada com sucesso: ${this.categoria.nomeCategoria}`);
    this.categoria = new Categoria("", "");
  }

}
