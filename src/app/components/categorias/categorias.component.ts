import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Categoria } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listaCategorias: Categoria[];
  categoria: Categoria;
  categoriaOld!: Categoria;
  atualiza : boolean;

  constructor(
      private categoriaService : CategoriaService) {

    this.listaCategorias = [];
    this.categoria = new Categoria("", "", true);
    this.atualiza = false;
  }

  ngOnInit(): void {
    this.categoriaService
    .getCategorias()
    .then((c: Categoria[]) => {
      this.listaCategorias = c;
    })
    .catch((error) =>{
      console.log('Erro ao carregar categorias: ' + error);
    });
  }

  salvarCategoria(categoria: Categoria){
    this.categoriaService
      .salvarCategoria(categoria)
      .then((_categoria : Categoria) => {
        this.listaCategorias.push(_categoria);
        Util.ordenaListaCategoria(this.listaCategorias);
        this.categoria = new Categoria("", "", true);
        Util.exibirMensagem(`Categoria salva com sucesso: ${categoria.nomeCategoria}`);
      })
      .catch((error) =>{
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao salvar categoria: ${categoria.nomeCategoria}`);
      })
  }

  atualizarCategoria(categoria: Categoria){
    this.categoriaService
      .atualizarCategoria(categoria)
      .then((_categoria : Categoria) => {
        this.listaCategorias.splice(this.listaCategorias.indexOf(this.categoriaOld), 1);
        this.listaCategorias.push(_categoria);
        this.atualiza = false;
        this.categoria = new Categoria("", "", true);
        Util.ordenaListaCategoria(this.listaCategorias);
        Util.exibirMensagem(`Categoria atualizada com sucesso: ${_categoria.nomeCategoria}`);
      })
      .catch((error) =>{
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao salvar categoria: ${categoria.nomeCategoria}`);
      })
  }

  ativarDesativarCategoria(categoria: Categoria){
    this.categoriaService
      .atualizarCategoria(categoria)
      .then((_categoria : Categoria) => {
        Util.exibirMensagem(`Status atualizado: ${_categoria.nomeCategoria}`);
      })
      .catch((error) =>{
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao atualizar status: ${categoria.nomeCategoria}`);
      })
  }

  editarCategoria(categoria: Categoria){
    this.categoriaOld = categoria;
    this.categoria = Categoria.clone(categoria);
    this.atualiza = true;
  }

  limparFormulario(){
    this.categoria = new Categoria("", "", true);
    this.atualiza = false;
  }
  
}
