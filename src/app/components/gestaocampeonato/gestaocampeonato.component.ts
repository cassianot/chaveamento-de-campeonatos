import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';
import { GerirCampeonatoComponent } from './gerir-campeonato/gerir-campeonato.component';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-gestaocampeonato',
  templateUrl: './gestaocampeonato.component.html',
  styleUrls: ['./gestaocampeonato.component.css']
})
export class GestaocampeonatoComponent implements AfterViewInit, OnInit{

  @ViewChild('comboCampeonatos') comboCampeonatos?: ElementRef;
  @ViewChild(GerirCampeonatoComponent) gerirCampeonato! : GerirCampeonatoComponent;

  listaChaveamento: ChaveamentoCampeonato[] = [];
  chaveamento: ChaveamentoCampeonato;
  chaveamentoAtual!: ChaveamentoCampeonato;

  selectPreenchido: boolean = false;
  selectTouched: number = 0;

  constructor(
    private gestaoCampeonatoService: GerarchaveamentoService,
    private route: ActivatedRoute
  ) {
    this.chaveamento = new ChaveamentoCampeonato();
    if(route.snapshot.paramMap.has('id')){
      var chaveamentoId = Number(route.snapshot.paramMap.get('id'));
      this.visualizaChaveamentoPorParametro(chaveamentoId);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      M.FormSelect.init(this.comboCampeonatos?.nativeElement);
    }, 1000);
  }

  ngOnInit(): void {
    this.gestaoCampeonatoService.getChaveamentos(true).subscribe({
      next: (chaveamentos) => {
        this.listaChaveamento = chaveamentos;
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem('Erro ao carregar chaveamento');
      }
    });
  }

  visualizaChaveamentoPorParametro(id : number){
    this.gestaoCampeonatoService
      .getChaveamentosById(id)
      .then((_chaveamento : ChaveamentoCampeonato) => {
        this.chaveamentoAtual = ChaveamentoCampeonato.clone(_chaveamento);
        this.gerirCampeonato.visivel = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  visualizarChaveamento(){
    this.chaveamentoAtual = ChaveamentoCampeonato.clone(this.chaveamento);
    this.gerirCampeonato.visivel = true;
  }

  verificaSePreenchido(){
    this.selectTouched++;
    this.selectPreenchido = true;
    if(this.chaveamento.Campeonato.nomeCampeonato == '')
      this.selectPreenchido = false;
  }


}
