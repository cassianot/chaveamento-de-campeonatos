import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

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
    this.categoriaService.getCategoriaById(this.categoriaId).subscribe(
      (categoria) => {
        this.categoria = categoria;
      },
      (error) => {
        M.toast({html: 'Parâmetros inválidos!', classes: 'rounded'});
        this.router.navigate(['/categorias']);
      }
    );
  }

  getStatus(){
    if(this.categoria.ativo)
      return "Ativo";
    return "Inativo";
  }
}
