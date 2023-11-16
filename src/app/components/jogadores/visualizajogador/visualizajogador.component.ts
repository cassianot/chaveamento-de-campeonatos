import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Jogador } from 'src/app/model/jogador.model';
import { JogadorService } from 'src/app/services/jogador.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-visualizajogador',
  templateUrl: './visualizajogador.component.html',
  styleUrls: ['./visualizajogador.component.css']
})
export class VisualizajogadorComponent implements OnInit {

  jogador! : Jogador;
  jogadorId!: number;

  constructor(
    private jogadorService: JogadorService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.jogador = new Jogador("", "", "", "", true);
    if(route.snapshot.paramMap.has('id')){
        this.jogadorId = Number(route.snapshot.paramMap.get('id'));
    }
  }


  ngOnInit(): void {
    this.jogadorService.getJogadorById(this.jogadorId).subscribe({
      next: (jogador) => {
        this.jogador = jogador;
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem('Parâmetros inválidos!');
        this.router.navigate(['/jogadores']);
      }
    });
  }

  getStatus(){
    if(this.jogador.ativo)
      return "Ativo";
    return "Inativo";
  }
  
}
