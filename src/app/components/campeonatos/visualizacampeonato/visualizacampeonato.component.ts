import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Categoria } from 'src/app/model/categoria.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-visualizacampeonato',
  templateUrl: './visualizacampeonato.component.html',
  styleUrls: ['./visualizacampeonato.component.css']
})
export class VisualizacampeonatoComponent {

  campeonato! : Campeonato;
  campeonatoId!: number;

  constructor(
    private campeonatoService: CampeonatoService,
    private route: ActivatedRoute
  ){
    this.campeonato = new Campeonato("", new Categoria("","", true), "", true);
    if(route.snapshot.paramMap.has('id')){
        this.campeonatoId = Number(route.snapshot.paramMap.get('id'));
    }
  }

  ngOnInit(){
      this.campeonatoService.getCampeonatoById(this.campeonatoId).subscribe({
        next: (campeonato) => {
          this.campeonato = campeonato;
        },
        error: (error) => {
          catchError(ErrorUtil.handleError);
          console.log(error);
          Util.exibirMensagem('Parametros inválidos');
        }
      });
  }

  getStatus(){
    if(this.campeonato.ativo)
      return "Ativo";
    return "Inativo";
  }

}
