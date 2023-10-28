import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jogador } from 'src/app/model/jogador.model';

@Component({
  selector: 'app-listajogadores',
  templateUrl: './listajogadores.component.html',
  styleUrls: ['./listajogadores.component.css']
})
export class ListajogadoresComponent {

  @Input() listajogadores : Array<Jogador> = [];
  @Input() atualiza! : boolean;
  @Output() exibeMensagem = new EventEmitter<string>();
  @Output() ativaDesativarJogador = new EventEmitter<Jogador>();
  @Output() editaJogador = new EventEmitter<Jogador>();

  ativarDesativarJogador (jogador: Jogador) {
    if(!this.atualiza) {
      jogador.ativo = !jogador.ativo;
      this.ativaDesativarJogador.emit(jogador);
    } else {
      this.exibeMensagem.emit("Não é possível ativar/desativar enquanto está editando um Jogador!");
    }
  }

  editarJogador(jogador: Jogador) {
    this.editaJogador.emit(jogador);
  }

}
