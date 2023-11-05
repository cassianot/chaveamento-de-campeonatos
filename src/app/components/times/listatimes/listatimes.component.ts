import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Time } from 'src/app/model/time.model';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-listatimes',
  templateUrl: './listatimes.component.html',
  styleUrls: ['./listatimes.component.css']
})
export class ListatimesComponent {

  @Input() listaTimes : Time[] = [];
  @Input() atualiza! : boolean;
  @Output() ativaDesativarTime = new EventEmitter<Time>();
  @Output() editaTime = new EventEmitter<Time>();

  ativarDesativarTime (time: Time) {
    if(!this.atualiza) {
      time.ativo = !time.ativo;
      this.ativaDesativarTime.emit(time);
    } else {
      Util.exibirMensagem("Não é possível ativar/desativar enquanto está editando um time!");
    }
  }

  editarTime(time: Time) {
    this.editaTime.emit(time);
  }
}
