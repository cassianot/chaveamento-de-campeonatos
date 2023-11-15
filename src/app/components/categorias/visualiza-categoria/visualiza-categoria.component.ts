import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Categoria } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-visualiza-categoria',
  templateUrl: './visualiza-categoria.component.html',
  styleUrls: ['./visualiza-categoria.component.css']
})
export class VisualizaCategoriaComponent {

  categoria! : Categoria;
  categoriaId!: number;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.categoria = new Categoria("", "", true);
    if(route.snapshot.paramMap.has('id')){
        this.categoriaId = Number(route.snapshot.paramMap.get('id'));
    }
  }

  ngOnInit(){
    /*this.categoriaService
    .getCategoriaById(this.categoriaId)
    .then((c: Categoria) => {
      this.categoria = c;
    })
    .catch((error) =>{
      Util.exibirMensagem('Parâmetros inválidos');
    });*/
    this.categoriaService.getCategoriaById(this.categoriaId).subscribe({
      next: (categorias) => {
        this.categoria = categorias;
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        Util.exibirMensagem('Parâmetros inválidos');
      }
    });
  }

  getStatus(){
    if(this.categoria.ativo)
      return "Ativo";
    return "Inativo";
  }
}
