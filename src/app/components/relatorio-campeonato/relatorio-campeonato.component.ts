import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';
import { ListarRelatorioComponent } from './listar-relatorio/listar-relatorio.component';
import { catchError } from 'rxjs';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-relatorio-campeonato',
  templateUrl: './relatorio-campeonato.component.html',
  styleUrls: ['./relatorio-campeonato.component.css']
})
export class RelatorioCampeonatoComponent implements OnInit, AfterViewInit{

  @ViewChild('comboCampeonatos') comboCampeonatos?: ElementRef;
  @ViewChild(ListarRelatorioComponent) relatorio! : ListarRelatorioComponent;

  listaChaveamento: ChaveamentoCampeonato[] = [];
  chaveamento! : ChaveamentoCampeonato;

  selectPreenchido: boolean = false;
  selectTouched: number = 0;

  constructor(private gestaoCampeonatoService: GerarchaveamentoService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      M.FormSelect.init(this.comboCampeonatos?.nativeElement);
    }, 1000);
  }

  ngOnInit(): void {
    this.gestaoCampeonatoService.getChaveamentos().subscribe({
      next: (chaveamentos) => {
        this.listaChaveamento = chaveamentos;
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem('Erro ao carregar relatório');
      }
    });
  }

  visualizarRelatorio() {
    this.relatorio.visivel = true;
  }

  verificaSePreenchido(){
    this.selectTouched++;
    this.selectPreenchido = true;
    if(this.chaveamento.Campeonato.nomeCampeonato == '')
      this.selectPreenchido = false;
  }
  
}

