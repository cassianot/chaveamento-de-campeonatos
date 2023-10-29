import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Campeonato } from 'src/app/model/campeonato.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { JogadorService } from 'src/app/services/jogador.service';
import { TimesService } from 'src/app/services/times.service';
import { ListarchaveamentoComponent } from './listarchaveamento/listarchaveamento.component';

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
  listaCompetidores: any[] = [];
  listaCompetidoresSelecionados: any[] = [];
  tipoCompetidor: string = 'times';

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
        this.listaCampeonatos = campeonatos;
        this.ordenaListaCameponato();
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

  ordenaListaCameponato(){
    this.listaCampeonatos.sort((a,b) => a.nomeCampeonato!.localeCompare(b.nomeCampeonato!));
  }

  gerarChaveamento(){
    //this.listaChaveamento.visivel = true;
    if(this.listaCompetidoresSelecionados.length < 16){
      M.toast({html: 'Precisa de pelo menos 16 jogadores/times', classes: 'rounded'});
      return;
    }
  }

}
