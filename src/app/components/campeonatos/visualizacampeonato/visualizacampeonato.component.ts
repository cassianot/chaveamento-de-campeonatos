import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Categoria } from 'src/app/model/categoria.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';

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
    private route: ActivatedRoute,
    private router: Router
  ){
    this.campeonato = new Campeonato("", new Categoria("","", true), "", true);
    if(route.snapshot.paramMap.has('id')){
        this.campeonatoId = Number(route.snapshot.paramMap.get('id'));
    }
  }

  ngOnInit(){
    this.campeonatoService.getCampeonatoById(this.campeonatoId).subscribe(
      (campeonato) => {
        this.campeonato = campeonato;
      },
      (error) => {
        M.toast({html: 'Parâmetros inválidos!', classes: 'rounded'});
        this.router.navigate(['/campeonatos']);
      }
    );
  }

  getStatus(){
    if(this.campeonato.ativo)
      return "Ativo";
    return "Inativo";
  }

}
