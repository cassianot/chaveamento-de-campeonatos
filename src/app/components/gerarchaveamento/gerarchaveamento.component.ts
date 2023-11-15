import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Campeonato } from 'src/app/model/campeonato.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { JogadorService } from 'src/app/services/jogador.service';
import { TimesService } from 'src/app/services/times.service';
import { ListarchaveamentoComponent } from './listarchaveamento/listarchaveamento.component';
import { Util } from 'src/app/util/util';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-gerarchaveamento',
  templateUrl: './gerarchaveamento.component.html',
  styleUrls: ['./gerarchaveamento.component.css']
})
export class GerarchaveamentoComponent implements AfterViewInit, OnInit {

  @ViewChild('comboCampeonatos') comboCampeonatos?: ElementRef;
  @ViewChild('selecionaCompetidores') selecionaCompetidores?: ElementRef;
  @ViewChild(ListarchaveamentoComponent) listaChaveamento!: ListarchaveamentoComponent;

  listaCampeonatos : Campeonato[] = [];
  campeonato!: Campeonato;
  listaCompetidores: any[] = [];
  listaCompetidoresSelecionados: any[] = [];
  tipoCompetidor: string = 'times';
  chaveamento!: ChaveamentoCampeonato;
  selectPreenchido: boolean = false;
  selectTouched: number = 0;

  constructor(
    private campeonatoService: CampeonatoService,
    private jogadorService: JogadorService,
    private timeService: TimesService
  ) { }

  ngOnInit(): void {
    this.getCampeonatos();
    this.getTimes();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      M.FormSelect.init(this.comboCampeonatos?.nativeElement);
      M.FormSelect.init(this.selecionaCompetidores?.nativeElement);
    }, 1000);
  }

  getJogadores(){
    this.jogadorService.getJogadores().subscribe({
      next: (jogadores) => {
        this.listaCompetidores = jogadores;
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
      }
    });
  }

  getCampeonatos(){
    this.campeonatoService.getCampeonatos().subscribe({
      next: (campeonatos) => {
        this.listaCampeonatos = campeonatos;
        this.listaCampeonatos = Util.ordenaListaCameponato(campeonatos);
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
      }
    });
  }

  getTimes(){
    this.timeService.getTimes().subscribe({
      next: (times) => {
        this.listaCompetidores = times;
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
      }
    });
  }

  selectionarTipoCompetidores(radio : string){
    this.tipoCompetidor = radio;
    if(radio == 'times')
      this.getTimes();
    else
      this.getJogadores();
  }

  getNomeDoObjeto(objeto: any){
    if(this.tipoCompetidor == 'times'){
      return objeto.nomeTime;
    } else {
      return objeto.nomeJogador;
    }
  }

  selecionarTodos(){
    this.listaCompetidoresSelecionados = this.listaCompetidores;
  }

  gerarChaveamento(){
    if(this.listaCompetidoresSelecionados.length < 16){
      M.toast({html: 'Precisa de pelo menos 16 jogadores/times', classes: 'rounded'});
      return;
    }
    Util.shuffle(this.listaCompetidoresSelecionados);

    this.chaveamento = new ChaveamentoCampeonato();
    this.chaveamento.Campeonato = this.campeonato;
    this.chaveamento.setChaveamento(this.listaCompetidoresSelecionados);
    
    this.listaChaveamento.visivel = true;
  }

  verificaSePreenchido(){
    this.selectTouched++;
    this.selectPreenchido = true;
    if(this.campeonato.categoria == '')
      this.selectPreenchido = false;
  }


}
