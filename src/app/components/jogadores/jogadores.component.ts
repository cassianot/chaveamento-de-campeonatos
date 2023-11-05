import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Jogador } from 'src/app/model/jogador.model';
import { JogadorService } from 'src/app/services/jogador.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {

  listaJogadores: Jogador[];
  jogador: Jogador;
  jogadorOld!: Jogador;
  atualiza : boolean;

  constructor(
      private jogadorService : JogadorService) {

    this.listaJogadores = [];
    this.jogador = new Jogador("", "", "", "", true);
    this.atualiza = false;
  }

  ngOnInit(): void {
    this.jogadorService
      .getJogadores()
      .then((jogadores)=>{
        this.listaJogadores = jogadores;
        Util.ordenaListaJogadores(this.listaJogadores);
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  salvarJogador(jogador: Jogador){
    this.jogadorService
      .salvarJogador(jogador)
      .then((_jogador : Jogador) => {
        this.listaJogadores.push(_jogador);
        Util.ordenaListaJogadores(this.listaJogadores);
        this.jogador = new Jogador("","","","", true);
        Util.exibirMensagem(`Jogador salva com sucesso: ${_jogador.nomeCompetidor}`);
      })
      .catch((error) =>{
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao salvar jogador: ${jogador.nomeCompetidor}`);
      })
  }

  atualizarJogador(jogador: Jogador){
    this.jogadorService
      .atualizarJogador(jogador)
      .then((_jogador : Jogador) =>{
        this.listaJogadores.splice(this.listaJogadores.indexOf(this.jogadorOld), 1);
        this.listaJogadores.push(_jogador);
        this.atualiza = false;
        this.jogador = new Jogador("", "", "", "", true);
        Util.ordenaListaJogadores(this.listaJogadores);
        Util.exibirMensagem(`Jogador atualizada com sucesso: ${_jogador.nomeCompetidor}`);
      })
      .catch((error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao salvar jogador: ${jogador.nomeCompetidor}`);
      })
  }

  ativarDesativarJogador(jogador: Jogador){
    this.jogadorService
      .atualizarJogador(jogador)
      .then((_jogador : Jogador) => {
        Util.exibirMensagem(`Status atualizado: ${_jogador.nomeCompetidor}`);
      })
      .catch((error) => {
        Util.exibirMensagem(`Erro ao atualizar status: ${jogador.nomeCompetidor}`);
      })
  }

  editarJogador(jogador: Jogador){
    this.jogadorOld = jogador;
    this.jogador = Jogador.clone(jogador);
    this.atualiza = true;
  }

  limparFormulario(){
    this.jogador = new Jogador("", "", "", "", true);
    this.atualiza = false;
  }
}
