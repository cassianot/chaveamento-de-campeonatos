import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/model/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  listaCategorias: Array<Categoria> = [];

  exibirMensagem(mensagem: string){
    M.toast({html: mensagem, classes: 'rounded'});
  }
  
}
