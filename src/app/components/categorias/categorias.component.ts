import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

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
    this.categoriaService.getCategorias().subscribe(
      (categorias) => {
        this.listaCategorias = categorias;
        this.ordenaLista();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  exibirMensagem(mensagem: string){
    M.toast({html: mensagem, classes: 'rounded'});
  }

  salvarCategoria(categoria: Categoria){
    this.categoriaService.salvarCategoria(categoria).subscribe(
      (_categoria) => {
        this.listaCategorias.push(_categoria);
        this.ordenaLista();
        this.categoria = new Categoria("", "", true);
        this.exibirMensagem(`Categoria salva com sucesso: ${categoria.nomeCategoria}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao salvar categoria: ${categoria.nomeCategoria}`);
      }
    );
  }

  atualizarCategoria(categoria: Categoria){
    this.categoriaService.atualizarCategoria(categoria).subscribe(
      (_categoria) => {
        this.listaCategorias.splice(this.listaCategorias.indexOf(this.categoriaOld), 1);
        this.listaCategorias.push(_categoria);
        this.atualiza = false;
        this.categoria = new Categoria("", "", true);
        this.ordenaLista();
        this.exibirMensagem(`Categoria atualizada com sucesso: ${categoria.nomeCategoria}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao atualizar categoria: ${categoria.nomeCategoria}`);
      }
    );
  }

  ativarDesativarCategoria(categoria: Categoria){
    this.categoriaService.atualizarCategoria(categoria).subscribe(
      (_categoria) => {
        this.exibirMensagem(`Status atualizado: ${categoria.nomeCategoria}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao atualizar status: ${categoria.nomeCategoria}`);
      }
    );
  }

  editarCategoria(categoria: Categoria){
    this.categoriaOld = categoria;
    this.categoria = Categoria.clone(categoria);
    this.atualiza = true;
  }

  limparFormulario(limpa: string){
    this.categoria = new Categoria("", "", true);
    this.atualiza = false;
  }

  ordenaLista(){
    this.listaCategorias.sort((a,b) => a.nomeCategoria!.localeCompare(b.nomeCategoria!));
  }
  
}
