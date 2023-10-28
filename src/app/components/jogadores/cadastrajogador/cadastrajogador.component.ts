import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jogador } from 'src/app/model/jogador.model';

@Component({
  selector: 'app-cadastrajogador',
  templateUrl: './cadastrajogador.component.html',
  styleUrls: ['./cadastrajogador.component.css']
})
export class CadastrajogadorComponent implements OnInit {

  @Input() jogador! : Jogador;
  @Input() atualiza! : boolean;
  @Input() listajogadores : Array<Jogador> = [];
  @Output() exibeMensagem = new EventEmitter<string>();
  @Output() salvaJogador = new EventEmitter<Jogador>();
  @Output() atualizaJogador = new EventEmitter<Jogador>();
  @Output() limpaFormulario = new EventEmitter<string>();

  ngOnInit(){
    this.jogador = new Jogador("", "", "", "", true);
  }

  cadastraJogador() : void {
    this.salvaJogador.emit(this.jogador);
  }

  editaJogador() : void {
    this.atualizaJogador.emit(this.jogador);
  }

  limparFormulario(){
    this.limpaFormulario.emit("");
  }
  
}
