import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';
import { GerirCampeonatoComponent } from './gerir-campeonato/gerir-campeonato.component';

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

  constructor(private gestaoCampeonatoService: GerarchaveamentoService) { this.chaveamento = new ChaveamentoCampeonato();}

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
