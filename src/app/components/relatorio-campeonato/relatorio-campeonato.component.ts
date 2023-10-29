import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';
import { ListarRelatorioComponent } from './listar-relatorio/listar-relatorio.component';

@Component({
  selector: 'app-relatorio-campeonato',
  templateUrl: './relatorio-campeonato.component.html',
  styleUrls: ['./relatorio-campeonato.component.css']
})
export class RelatorioCampeonatoComponent implements OnInit, AfterViewInit{

  @ViewChild('comboCampeonatos') comboCampeonatos?: ElementRef;
  @ViewChild(ListarRelatorioComponent) relatorio! : ListarRelatorioComponent;

  listaChaveamento: ChaveamentoCampeonato<any>[] = [];
  chaveamento! : ChaveamentoCampeonato<any>;

  constructor(private gestaoCampeonatoService: GerarchaveamentoService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      M.FormSelect.init(this.comboCampeonatos?.nativeElement);
    }, 1000);
  }

  ngOnInit(): void {
    this.gestaoCampeonatoService.getChaveamentos().subscribe(
      (chaveamentos) => {
        this.listaChaveamento = chaveamentos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  visualizarRelatorio() {
    this.relatorio.visivel = true;
  }
  
}

