import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador.model';
import { JogadorService } from 'src/app/services/jogador.service';

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
    this.jogadorService.getJogadores().subscribe(
      (jogadores) => {
        this.listaJogadores = jogadores;
        this.ordenaLista();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  exibirMensagem(mensagem: string){
    M.toast({html: mensagem, classes: 'rounded'});
  }

  salvarJogador(jogador: Jogador){
    this.jogadorService.salvarJogador(jogador).subscribe(
      (_jogador) => {
        this.listaJogadores.push(_jogador);
        this.ordenaLista();
        this.jogador = new Jogador("","","","", true);
        this.exibirMensagem(`Jogador salva com sucesso: ${jogador.nomeJogador}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao salvar jogador: ${jogador.nomeJogador}`);
      }
    );
  }

  atualizarJogador(jogador: Jogador){
    this.jogadorService.atualizarJogador(jogador).subscribe(
      (_jogador) => {
        this.listaJogadores.splice(this.listaJogadores.indexOf(this.jogadorOld), 1);
        this.listaJogadores.push(_jogador);
        this.atualiza = false;
        this.jogador = new Jogador("", "", "", "", true);
        this.ordenaLista();
        this.exibirMensagem(`Jogador atualizada com sucesso: ${jogador.nomeJogador}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao atualizar jogador: ${jogador.nomeJogador}`);
      }
    );
  }

  ativarDesativarJogador(jogador: Jogador){
    this.jogadorService.atualizarJogador(jogador).subscribe(
      (_jogador) => {
        this.exibirMensagem(`Status atualizado: ${jogador.nomeJogador}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao atualizar status: ${jogador.nomeJogador}`);
      }
    );
  }

  editarJogador(jogador: Jogador){
    this.jogadorOld = jogador;
    this.jogador = Jogador.clone(jogador);
    this.atualiza = true;
  }

  limparFormulario(limpa: string){
    this.jogador = new Jogador("", "", "", "", true);
    this.atualiza = false;
  }

  ordenaLista(){
    this.listaJogadores.sort((a,b) => a.nomeJogador!.localeCompare(b.nomeJogador!));
  }

}
