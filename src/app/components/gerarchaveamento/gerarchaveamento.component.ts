import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Campeonato } from 'src/app/model/campeonato.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { JogadorService } from 'src/app/services/jogador.service';
import { TimesService } from 'src/app/services/times.service';
import { ListarchaveamentoComponent } from './listarchaveamento/listarchaveamento.component';
import { Util } from 'src/app/util/util';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { Time } from 'src/app/model/time.model';

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
  chaveamento!: ChaveamentoCampeonato<any>;

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
    this.jogadorService.getJogadores().subscribe(
      (jogadores) => {
        this.listaCompetidores = jogadores;
      },
      (error) => {
        console.log(error);
      }
    );    
  }

  getCampeonatos(){
    this.campeonatoService.getCampeonatos().subscribe(
      (campeonatos) => {
        this.listaCampeonatos = Util.ordenaListaCameponato(campeonatos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTimes(){
    this.timeService.getTimes().subscribe(
      (times) => {
        this.listaCompetidores = times;
      },
      (error) => {
        console.log(error);
      }
    );    
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

  gerarChaveamento(){
    if(this.listaCompetidoresSelecionados.length < 16){
      M.toast({html: 'Precisa de pelo menos 16 jogadores/times', classes: 'rounded'});
      return;
    }
    Util.shuffle(this.listaCompetidoresSelecionados);

    this.chaveamento = new ChaveamentoCampeonato<Time>();
    this.chaveamento.Campeonato = this.campeonato;
    
    this.chaveamento.GrupoA.push(this.listaCompetidoresSelecionados[0]);
    this.chaveamento.GrupoA.push(this.listaCompetidoresSelecionados[1]);

    this.chaveamento.GrupoB.push(this.listaCompetidoresSelecionados[2]);
    this.chaveamento.GrupoB.push(this.listaCompetidoresSelecionados[3]);

    this.chaveamento.GrupoC.push(this.listaCompetidoresSelecionados[4]);
    this.chaveamento.GrupoC.push(this.listaCompetidoresSelecionados[5]);

    this.chaveamento.GrupoD.push(this.listaCompetidoresSelecionados[6]);
    this.chaveamento.GrupoD.push(this.listaCompetidoresSelecionados[7]);

    this.chaveamento.GrupoE.push(this.listaCompetidoresSelecionados[8]);
    this.chaveamento.GrupoE.push(this.listaCompetidoresSelecionados[9]);

    this.chaveamento.GrupoF.push(this.listaCompetidoresSelecionados[10]);
    this.chaveamento.GrupoF.push(this.listaCompetidoresSelecionados[11]);

    this.chaveamento.GrupoG.push(this.listaCompetidoresSelecionados[12]);
    this.chaveamento.GrupoG.push(this.listaCompetidoresSelecionados[13]);

    this.chaveamento.GrupoH.push(this.listaCompetidoresSelecionados[14]);
    this.chaveamento.GrupoH.push(this.listaCompetidoresSelecionados[15]);

    this.chaveamento.GrupoI.push(this.listaCompetidoresSelecionados[14]);
    this.chaveamento.GrupoI.push(this.listaCompetidoresSelecionados[14]);
    
    this.listaChaveamento.visivel = true;
  }

}
