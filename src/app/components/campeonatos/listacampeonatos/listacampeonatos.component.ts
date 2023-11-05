import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-listacampeonatos',
  templateUrl: './listacampeonatos.component.html',
  styleUrls: ['./listacampeonatos.component.css']
})
export class ListacampeonatosComponent {

  @Input() listaCampeonatos : Campeonato[] = [];
  @Input() atualiza! : boolean;
  @Output() ativaDesativarCampeonato = new EventEmitter<Campeonato>();
  @Output() editaCampeonato = new EventEmitter<Campeonato>();

  ativarDesativarCampeonato (campeonato: Campeonato) {
    if(!this.atualiza) {
      campeonato.ativo = !campeonato.ativo;
      this.ativaDesativarCampeonato.emit(campeonato);
    } else {
      Util.exibirMensagem("Não é possível ativar/desativar enquanto está editando um campeonato!");
    }
  }

  editarCampeonato(campeonato: Campeonato) {
    this.editaCampeonato.emit(campeonato);
  }

}
